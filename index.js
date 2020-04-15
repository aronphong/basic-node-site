const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = (q.pathname === '/') ? 
        ('./index.html') : (`./${q.pathname}.html`);

    fs.readFile(fileName, (err, data) => {
        if (err) {
            fs.readFile("./404.html", (err, data) => {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end('404 Not Found');
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
                });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);
