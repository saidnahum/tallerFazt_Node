// Importar módulo HTTP
const http = require('http');

// Importando módulo colors
const colors = require('colors');

// Creando servidor
const handleServer = function(req, res){
   res.writeHead(200, { 'Content-type': 'text/html' });
   res.write('<h1>Hola mundo</h1>');
   res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
   console.log("Server on port: 3000".yellow);
})

