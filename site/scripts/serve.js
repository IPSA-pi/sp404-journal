// Minimal static server for the finished build (site/build), including the
// Pagefind index that `vite preview` does not serve. Usage: npm run preview
// Env: PORT (default 4173), BASE_PATH (same value used for the build, if any).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'build');
const port = Number(process.env.PORT || 4173);
const base = process.env.BASE_PATH || '';
const types = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.wasm': 'application/wasm',
	'.txt': 'text/plain; charset=utf-8'
};

if (!fs.existsSync(root)) {
	console.error('No build/ directory. Run `npm run build` first.');
	process.exit(1);
}

function resolveFile(urlPath) {
	const rel = decodeURIComponent(urlPath).replace(/\/+$/, '');
	const candidates = [rel, `${rel}.html`, `${rel}/index.html`];
	for (const c of candidates) {
		const file = path.join(root, c);
		if (!file.startsWith(root)) return null;
		if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
	}
	return null;
}

http
	.createServer((req, res) => {
		let p = new URL(req.url ?? '/', 'http://x').pathname;
		if (base && p.startsWith(base)) p = p.slice(base.length) || '/';
		const file = resolveFile(p);
		if (!file) {
			res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
			res.end('404 Not found');
			return;
		}
		res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
		fs.createReadStream(file).pipe(res);
	})
	.listen(port, () => console.log(`Serving ${root} at http://localhost:${port}${base}/`));
