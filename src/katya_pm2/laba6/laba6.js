var http = require("http");
var sqlite3 = require("sqlite3").verbose()
var fs = require("fs")
var db = new sqlite3.Database("olympiad.db")

http.createServer(function (req, res){
  var str = req.url.split("-");
  str[1] = decodeURIComponent(str[1]);
  console.log("request: " + str[0]);
  switch(str[0]) {
    case "/":
      fs.readFile("./src/katya_pm2/laba6/index.html", function(err, content){
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
      var stmnt = db.prepare("SELECT * FROM Olympiad WHERE id=(?) or name=(?)" +
      "or surname=(?) or country=(?) or points=(?)");
      stmnt.all(str[1], str[1], str[1], str[1], str[1], function(err, rows) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(rows);
          var obj_str = JSON.stringify(rows);
      		res.end(obj_str);
        }
      });
      stmnt.finalize();
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
}).listen(3000);
console.log("Server is running");
