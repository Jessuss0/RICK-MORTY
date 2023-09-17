const http = require("http");
const getCharById = require("./controllers/getCharById")

const PORT = 3001;

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    if(url.includes("/rickandmorty/character")){
      const id = url.split("/").at(-1);
      return getCharById(res, id);
    }
    
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end("Route not found");
}).listen(PORT);

module.exports =
  server;