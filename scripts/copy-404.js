// Post-build helper to make GitHub Pages work for Angular SPA
// - Flattens docs/browser/* into docs/ (for some builder outputs)
// - Ensures docs/404.html exists and matches docs/index.html (SPA fallback)

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const BROWSER_DIR = path.join(DOCS_DIR, 'browser');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function rmRecursive(target) {
  if (!fs.existsSync(target)) return;
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(target)) {
      rmRecursive(path.join(target, entry));
    }
    fs.rmdirSync(target);
  } else {
    fs.unlinkSync(target);
  }
}

function ensureSpa404() {
  const indexPath = path.join(DOCS_DIR, 'index.html');
  const notFoundPath = path.join(DOCS_DIR, '404.html');
  if (!fs.existsSync(indexPath)) {
    console.warn(`[copy-404] Skipped: ${indexPath} not found`);
    return;
  }
  const html = fs.readFileSync(indexPath, 'utf8');
  fs.writeFileSync(notFoundPath, html, 'utf8');
  console.log('[copy-404] Created docs/404.html for SPA fallback');
}

function main() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.warn(`[copy-404] Skipped: docs folder not found at ${DOCS_DIR}`);
    return;
  }

  // If Angular output was nested under docs/browser, flatten it.
  if (fs.existsSync(BROWSER_DIR)) {
    console.log('[copy-404] Flattening docs/browser into docs');
    copyRecursive(BROWSER_DIR, DOCS_DIR);
    rmRecursive(BROWSER_DIR);
  }

  ensureSpa404();
}

main();
// end
