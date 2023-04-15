var http = require('http');

http.createServer(function (req, res){
  res.write("Actived");//İsteğe bağlı
  res.end();
}).listen(1951);//By Lewafuse