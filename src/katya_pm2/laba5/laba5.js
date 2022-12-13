var http = require("http");
var sqlite3 = require("sqlite3").verbose()
var db = new sqlite3.Database("olympiad.db")

http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write("<!DOCTYPE html>\n" +
    "<html>\n" +
    " <head>\n" +
    " <meta charset='utf-8'>\n" +
    " </head>\n" +
    " <body>\n"
  );
  db.all("SELECT * FROM Olympiad WHERE (points > 250 or points < 200)", function(err, rows){
    if (err) {
      console.log(err);
    }
    else {
      for (var i = 0; i < rows.length; i++) {
        response.write(rows[i].id + " " + rows[i].name + " " + rows[i].surname +
         " " + rows[i].country + " " + rows[i].points + "<br>");
      }
      db.close()
    }
    response.end(" </body>\n" +
      "</html>\n"
    );
  });
}).listen(3000);
console.log("Server is running");
