const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const PUBLIC_DIR = path.join(__dirname, 'public_html');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

http.createServer(function (request, response) {
  console.log('request ', request.url);

  let filePath = request.url.split('?')[0];
  if (filePath === '/') {
    filePath = '/index.html';
  }

  let absPath = path.join(PUBLIC_DIR, filePath);
  
  // Safety check
  if (!absPath.startsWith(PUBLIC_DIR)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
  }

  // Check if directory, try serving index.html
  if (fs.existsSync(absPath) && fs.statSync(absPath).isDirectory()) {
      absPath = path.join(absPath, 'index.html');
  }

  const extname = String(path.extname(absPath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(absPath, function(error, content) {
    if (error) {
      if(error.code == 'ENOENT') {
        response.writeHead(404);
        response.end('404 Not Found');
      }
      else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
      }
    }
    else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });

}).listen(PORT);
console.log(`Server running at http://0.0.0.0:${PORT}/`);
