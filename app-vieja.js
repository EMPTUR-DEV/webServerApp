const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'martin',
            edad: '27',
            url: req.url
        }
        let str = JSON.stringify(salida);

        res.write(str);
        res.end();

    })
    .listen(8080);

console.log('Puerto 8080');