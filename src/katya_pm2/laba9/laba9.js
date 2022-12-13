var http = require("http");
var fs = require("fs")
var neo4j = require("neo4j-driver");
var uri =  'bolt://localhost:7687';
var user = 'neo4j';
var password = 'neo4jj';
var driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
var session = driver.session();

http.createServer(function (req, res){
  var str = req.url.split("-");
  str[1] = decodeURIComponent(str[1]);
  console.log("request: " + str[0]);
  switch(str[0]) {
    case "/":
      fs.readFile("./src/katya_pm2/laba9/index.html", function(err, content){
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
      session.run("MATCH (node_person)-[relation:result]->" +
      "(node_country:country {name_country: $search_field}) " +
      "RETURN node_person, relation, node_country;", {search_field: str[1]})
      .then(result => {
        res.end(JSON.stringify(result));
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
