var http = require("http");
var fs = require("fs")
var cassandra = require("cassandra-driver")
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'products'});

http.createServer(function (req, res){
  var str = req.url.split("-");
  str[1] = decodeURIComponent(str[1]);
  console.log("request: " + str[0]);
  switch(str[0]) {
    case "/":
      fs.readFile("./src/laba7/index.html", function(err, content){
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
    case "/search":
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      client.execute("SELECT * FROM products WHERE type = ?", [str[1]], function(err, rows) {
        if (err) {
          console.log("Can't select from table");
        }
        else {
          console.log(rows);
          var obj_str = JSON.stringify(rows);
      		res.end(obj_str);
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
