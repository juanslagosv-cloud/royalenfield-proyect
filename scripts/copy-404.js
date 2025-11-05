const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const indexPath = path.join(docsDir, 'index.html');
const fallbackPath = path.join(docsDir, '404.html');

try {
  if (!fs.existsSync(indexPath)) {
    console.error('index.html not found in docs/. Did the build run?');
    process.exit(1);
  }
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('Created docs/404.html for SPA fallback.');
} catch (err) {
  console.error('Failed to create 404.html:', err);
  process.exit(1);
}
