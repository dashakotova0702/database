var http = require("http");
var fs = require("fs")
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url =  "mongodb://localhost:27017";

http.createServer(function (req, res){
  var str = req.url.split("-");
  str[1] = decodeURIComponent(str[1]);
  console.log("request: " + str[0]);
  switch(str[0]) {
    case "/":
      fs.readFile("./src/katya_pm2/laba8/index.html", function(err, content){
        if (err) {
          res.writeHead(500, {"Content-Type": "text/html; charset=utf-8"});
          res.end(err.message, "utf-8");
          console.log(err);
        }
        else {
          res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
          res.end(content, "utf-8");
        }
      });
      break;
    case "/find":
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      MongoClient.connect(url, function(err, client){
        if (err) {
          console.log(err);
        }
        else {
          var db = client.db("olympiad-db");
          var collection = db.collection("olympiad");
          collection.find({$text: {$search: str[1]}}).toArray(function(err, result){
            if (err) {
              console.log(err);
            }
            else {
              console.log(result);
              res.end(JSON.stringify(result));
            }
          });
        }
      });
      break;
    default:
      res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
      res.write("<!DOCTYPE html>\n" +
        "<html>\n" +
        " <head>\n" +
        " <meta charset='utf-8'>\n" +
        " </head>\n" +
        " <body>\n"
      );
      res.write("404, Not Found: " + str[0]);
      res.end(" </body>\n" +
        "</html>\n"
      );
      break;
  }
}).listen(3000, '0.0.0.0');
console.log("Server is running");
