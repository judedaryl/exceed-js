const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write('chunkz');
    res.end();
});



server.on('listening', () => {
    console.log('listening port 3000')

});

server.on('connection', (req) => {
    console.log('connection');  
    console.log(req.host);
})

server.listen(3000);