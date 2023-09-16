const http = require("http");
const data = require("./utils/data")

const PORT = 3001;

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    if(url.includes("/rickandmorty/character")){
       const id = url.split("/").at(-1);
       const character = data.find((char)=> char.id == id);
       if(character){
       res.writeHead(200, {'Content-Type': 'application/json'});
       return res.end(JSON.stringify(character))}
       else{
        res.writeHead(404, {'Content-Type': 'application/json'});
       return res.end(JSON.stringify({error: "character not found"}))
       }

    }
    
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end("Route not found");
}).listen(PORT);

module.exports =
  server;