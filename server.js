import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname } from 'path';

const PORT = 5000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = createServer(async (req, res) => {
    let urlPath = req.url.split('?')[0];
    let filePath = '.' + urlPath;
    
    if (filePath === './' || filePath === '.') {
        filePath = './index.html';
    }
    
    if (filePath === './favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    const ext = extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    console.log(`${req.method} ${req.url} -> ${filePath}`);
    
    try {
        const content = await readFile(filePath);
        res.writeHead(200, { 
            'Content-Type': contentType,
            'Cache-Control': 'no-cache'
        });
        res.end(content, 'utf-8');
        console.log(`200 ${filePath}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            if (ext === '') {
                console.log(`Serving index.html for ${filePath}`);
                const content = await readFile('./index.html');
                res.writeHead(200, { 
                    'Content-Type': 'text/html',
                    'Cache-Control': 'no-cache'
                });
                res.end(content, 'utf-8');
            } else {
                console.log(`404 ${filePath}`);
                res.writeHead(404);
                res.end('File not found');
            }
        } else {
            console.log(`500 ${filePath}: ${error.code}`);
            res.writeHead(500);
            res.end('Server error: ' + error.code);
        }
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
