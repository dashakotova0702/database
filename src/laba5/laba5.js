var http = require("http");
var sqlite3 = require("sqlite3").verbose()
var db = new sqlite3.Database("products.db")

db.run("CREATE TABLE Products (id integer primary key, name char(40), count float, units char(5), type char(50))", function(err){
  if (err) {
    console.log("Can't create table")
  }
  else {
    var stmnt = db.prepare("INSERT INTO Products (name, count, units, type) values ((?), (?), (?), (?))", function(err){
      if (err) {
        console.log("Can't insert to table")
      }
      else {
        stmnt.run("картофель", 1.5, "кг","овощи");
        stmnt.run("лук", 1, "кг","овощи");
        stmnt.run("капуста", 0.7, "кг","овощи");
        stmnt.run("яблоко", 5, "шт","фрукты");
        stmnt.run("банан", 3, "шт","фрукты");
        stmnt.run("гречка", 1, "кг","бакалея");
        stmnt.run("рис", 1, "кг","бакалея");
        stmnt.run("пиво", 0.5, "л","алкоголь");
        stmnt.run("творог", 0.4, "кг","молочная продукция");
        stmnt.run("молоко", 1, "л","молочная продукция");
        stmnt.run("яйца", 10, "шт","продукты животного происхождения");
        stmnt.run("филе курицы", 0.9, "кг","продукты животного происхождения");
        stmnt.run("сыр", 0.5, "кг","молочная продукция");
        stmnt.run("сахар", 3, "кг","бакалея");
        stmnt.run("какао-порошок", 0.3, "кг","бакалея");
        stmnt.run("сметана", 0.2, "кг","молочная продукция");
        stmnt.run("вода", 1.5, "кг","напитки");
        stmnt.run("яблочный сок", 1, "л","напитки");
        stmnt.run("свиной фарш", 2.2, "кг","продукты животного происхождения");
        stmnt.run("мука", 1, "кг","бакалея");
        stmnt.run("сливочное масло", 0.4, "кг","молочная продукция");
        stmnt.run("шампиньоны", 0.7, "кг","овощи");
        stmnt.run("колбаса", 0.6, "кг","продукты животного происхождения");
        stmnt.finalize();
      }
    });
  }
});

http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write("<!DOCTYPE html>\n" +
    "<html>\n" +
    " <head>\n" +
    " <meta charset='utf-8'>\n" +
    " </head>\n" +
    " <body>\n"
  );
  db.all("SELECT * FROM Products", function(err, rows){
    if (err) {
      console.log("Can't select from table")
    }
    else {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        response.write(row.id + " " + row.name + " " + row.count + " " + row.units + " " + row.type + "<br>");
      }
      db.close()
    }
    response.end(" </body>\n" +
      "</html>\n"
    );
  });
}).listen(3000);
console.log("Server is running");
