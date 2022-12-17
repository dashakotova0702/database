var fs = require("fs")
var http = require("http");
var mongodb = require("mongodb");
var escape = require("mongo-escape")

var client = new mongodb.MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });

var handle_GET = function (request, response) {
    switch (request.url) {
        case "/":
            fs.readFile("./src/masha_pm2/laba8/index.html", function (err, content) {
                if (!err) {
                    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    response.end(content, "utf-8")
                } else {
                    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    response.end(err.message, "utf-8");
                    console.log(err);
                }
            });
            break;
        default:
            response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
            response.end("<!DOCTYPE html>\n" +
                "<html>\n" +
                "   <head>\n" +
                "       <meta charset='utf-8'>\n" +
                "   </head>\n" +
                "   <body>\n" +
                "404, NOT FOUND: " + request.url +
                " \n</body>\n" +
                "</html>"
            );
    }
}

var handle_POST = function (request, response) {
    if (request.url != "/get_table") {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.end();
    }

    var data = '';
    request.on('data', function (chunk) {
        data += chunk;
    });
    request.on('end', function () {
        var filters = JSON.parse(data);
        var db_data = {};
        var collection = client.db('BOOKS').collection("BooksCollection");
        collection.find({
            name: { $regex: escape.escape(filters.name), $options: 'i' },
            language: { $regex: escape.escape(filters.language), $options: 'i' },
            genre: { $regex: escape.escape(filters.genre), $options: 'i' },
            sales: { $gte: parseInt(filters.sales_from), $lte: parseInt(filters.sales_to) }
        }).toArray(function (err, res) {
            if (err) {
                console.error(err);
                return;
            }
            db_data.table = res;
            response.end(JSON.stringify(db_data));
        })
    });
}

var server_callback = function (request, response) {
    console.log("request to: " + request.url + " method: " + request.method)
    if (request.method == "GET") {
        handle_GET(request, response);
    } else {
        handle_POST(request, response);
    }
}

client.connect(function (err, client) {
    if (err) {
        console.error(err);
        return;
    }
    var db = client.db('BOOKS');
    db.collections(function (err, cols) {
        if (err) {
            console.error(err);
            return;
        }
        if (cols.length == 0) {
            var collection = db.collection("BooksCollection");
            var books = [
                {
                    name: "Harry Potter",
                    language: "English", sales: 500, genre: "Fantasy"
                },
                {
                    name: "Goosebumps",
                    language: "English", sales: 350, genre: "Horror"
                },
                {
                    name: "Perry Mason",
                    language: "English", sales: 300, genre: "Detective fiction"
                },
                {
                    name: "Berenstain Bears",
                    language: "English", sales: 260, genre: "Childrens"
                },
                {
                    name: "Choose Your Own Adventure",
                    language: "English", sales: 250, genre: "Gamebook"
                },
                {
                    name: "Diary of a Wimpy Kid",
                    language: "English", sales: 250, genre: "Comedy"
                },
                {
                    name: "Sweet Valley High",
                    language: "Italian", sales: 250, genre: "Young adult fiction"
                },
                {
                    name: "The Railway Series",
                    language: "English", sales: 201, genre: "Childrens"
                },
                {
                    name: "Noddy",
                    language: "Italian", sales: 200, genre: "Childrens"
                },
                {
                    name: "Nancy Drew",
                    language: "English", sales: 200, genre: "Childrens Detective fiction"
                },
                {
                    name: "San-Antonio",
                    language: "French", sales: 200, genre: "Detective fiction"
                },
                {
                    name: "Robert Langdon",
                    language: "English", sales: 200, genre: "Mystery-thriller"
                },
                {
                    name: "Geronimo Stilton",
                    language: "Italian", sales: 180, genre: "Childrens"
                },
                {
                    name: "Percy Jackson & the Olympians",
                    language: "English", sales: 180, genre: "Fantasy"
                },
                {
                    name: "The Baby-sitters Club",
                    language: "French", sales: 172, genre: "Childrens"
                },
                {
                    name: "Twilight",
                    language: "English", sales: 160, genre: "Fantasy Romance Young adult fiction"
                },
                {
                    name: "Star Wars",
                    language: "English", sales: 160, genre: "Space opera"
                }
            ]
            collection.insertMany(books, function (err, res) {
                if (err) {
                    console.error(err);
                    return;
                }
            })
        }
        http.createServer(server_callback).listen(3000);
        console.log("Listen at http://localhost:3000/");
    });
});
