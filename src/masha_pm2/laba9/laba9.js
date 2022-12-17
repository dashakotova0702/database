var fs = require("fs")
var http = require("http");
const neo4j = require('neo4j-driver');

const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4jj"));
const session = driver.session();

var handle_GET = function (request, response) {
    switch (request.url) {
        case "/":
            fs.readFile("./src/masha_pm2/laba9/index.html", function (err, content) {
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
        console.log(filters)
        session.run("MATCH (book:bookname)-[:MENTIONED_CHARACTERS]->(lang) WHERE "+
        "book.bookname CONTAINS $title AND book.sales>=$from AND book.sales<=$to "+
        "RETURN book, lang;",
        {
            title: filters.bookname,
            from: parseInt(filters.sales_from),
            to: parseInt(filters.sales_to)
        }).then(res => {
            var table = [];
            res.records.forEach(rec => {
                var row = {};
                row.bookname = rec.get('book').properties.bookname;
                row.language = rec.get('lang').properties.title;
                row.sales = rec.get('book').properties.sales;
                row.genre = rec.get('book').properties.genre;
                table.push(row);
            });
            db_data.table = table;
            console.log(db_data)
            response.end(JSON.stringify(db_data));
        }).catch(err => {
            console.error(err);
        });
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

session.run("MATCH (n) RETURN n").then(res => {
    if (res.records.length == 0) {
        session.run(
            "CREATE (lang1:lang $lang1) " +
            "CREATE (lang2:lang $lang2) " +
            "CREATE (lang3:lang $lang3) " +
            "CREATE (lang4:lang $lang4) " +
            "CREATE (book1:bookname $book1) " +
            "CREATE (book2:bookname $book2) " +
            "CREATE (book3:bookname $book3) " +
            "CREATE (book4:bookname $book4) " +
            "CREATE (book5:bookname $book5) " +
            "CREATE (book6:bookname $book6) " +
            "CREATE (book7:bookname $book7) " +
            "CREATE (book8:bookname $book8) " +
            "CREATE (book9:bookname $book9) " +
            "CREATE (book10:bookname $book10) " +
            "CREATE (book11:bookname $book11) " +
            "CREATE (book12:bookname $book12) " +
            "CREATE (book13:bookname $book13) " +
            "CREATE (book14:bookname $book14) " +
            "CREATE (book15:bookname $book15) " +
            "CREATE (book16:bookname $book16) " +
            "CREATE (book17:bookname $book17) " +
            "CREATE" +
            "(book1)-[:MENTIONED_CHARACTERS {chars: []}]->(lang1)," +
            "(book2)-[:MENTIONED_CHARACTERS {chars: []}]->(lang2)," +
            "(book3)-[:MENTIONED_CHARACTERS {chars: []}]->(lang2)," +
            "(book4)-[:MENTIONED_CHARACTERS {chars: []}]->(lang1)," +
            "(book5)-[:MENTIONED_CHARACTERS {chars: []}]->(lang1)," +
            "(book6)-[:MENTIONED_CHARACTERS {chars: []}]->(lang2)," +
            "(book7)-[:MENTIONED_CHARACTERS {chars: []}]->(lang4)," +
            "(book8)-[:MENTIONED_CHARACTERS {chars: []}]->(lang1)," +
            "(book9)-[:MENTIONED_CHARACTERS {chars: []}]->(lang4)," +
            "(book10)-[:MENTIONED_CHARACTERS {chars: []}]->(lang1)," +
            "(book11)-[:MENTIONED_CHARACTERS {chars: []}]->(lang3)," +
            "(book12)-[:MENTIONED_CHARACTERS {chars: []}]->(lang1)," +
            "(book13)-[:MENTIONED_CHARACTERS {chars: []}]->(lang4)," +
            "(book14)-[:MENTIONED_CHARACTERS {chars: []}]->(lang1)," +
            "(book15)-[:MENTIONED_CHARACTERS {chars: []}]->(lang3)," +
            "(book16)-[:MENTIONED_CHARACTERS {chars: []}]->(lang2)," +
            "(book17)-[:MENTIONED_CHARACTERS {chars: []}]->(lang2);",
            {
                lang1: { title: "English", authorscountry: "England" },
                lang2: { title: "English", authorscountry: "USA" },
                lang3: { title: "Franch", authorscountry: "France" },
                lang4: { title: "Italian", authorscountry: "Italy" },
                book1: {
                    bookname: "Harry Potter",
                    sales: 500, genre: "Fantasy"
                },
                book2: {
                    bookname: "Goosebumps",
                    sales: 350, genre: "Horror"
                },
                book3: {
                    bookname: "Perry Mason",
                    sales: 300, genre: "Detective fiction"
                },
                book4: {
                    bookname: "Berenstain Bears",
                    sales: 260, genre: "Childrens"
                },
                book5: {
                    bookname: "Choose Your Own Adventure",
                    sales: 250, genre: "Gamebook"
                },
                book6: {
                    bookname: "Diary of a Wimpy Kid",
                    sales: 250, genre: "Comedy"
                },
                book7: {
                    bookname: "Sweet Valley High",
                    sales: 250, genre: "Young adult fiction"
                },
                book8: {
                    bookname: "The Railway Series",
                    sales: 201, genre: "Childrens"
                },
                book9: {
                    bookname: "Noddy",
                    sales: 200, genre: "Childrens"
                },
                book10: {
                    bookname: "Nancy Drew",
                    sales: 200, genre: "Childrens Detective fiction"
                },
                book11: {
                    bookname: "San-Antonio",
                    sales: 200, genre: "Detective fiction"
                },
                book12: {
                    bookname: "Robert Langdon",
                    sales: 200, genre: "Mystery-thriller"
                },
                book13: {
                    bookname: "Geronimo Stilton",
                    sales: 180, genre: "Childrens"
                },
                book14: {
                    bookname: "Percy Jackson & the Olympians",
                    sales: 180, genre: "Fantasy"
                },
                book15: {
                    bookname: "The Baby-sitters Club",
                    sales: 172, genre: "Childrens"
                },
                book16: {
                    bookname: "Twilight",
                    sales: 160, genre: "Fantasy Romance Young adult fiction"
                },
                book17: {
                    bookname: "Star Wars",
                    sales: 160, genre: "Space opera"
                }
            }).then(res => {
                process.emit('readyToServerCreate');
            }).catch(err => {
                console.error(err);
            });
    } else {
        process.emit('readyToServerCreate');
    }
}).catch(err => {
    console.error(err);
});

process.on('readyToServerCreate', () => {
    http.createServer(server_callback).listen(3000);
    console.log("Listen at http://localhost:3000/");
});
