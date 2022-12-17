var cassandra = require("cassandra-driver");
var fs = require("fs")
var http = require("http");
var client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: "books", localDataCenter: "datacenter1" });

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection:', error.message);
});

//client.execute("SELECT * FROM books;", function (err, result){});

process.on('readyToServerCreate', () => {
    http.createServer(server_callback).listen(3000);
    console.log("Listen at http://localhost:3000/");
});

var handle_GET = function (request, response) {
    switch (request.url) {
        case "/":
            fs.readFile("./src/masha_pm2/laba7/index.html", function (err, content) {
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
    var parse = function (err, res) {
        if (err) {
            console.log(err);
            response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
            var db_data = {};
            db_data.table = res.rows;
            response.end(JSON.stringify(db_data));
        }
    }

    var data = '';
    request.on('data', function (chunk) {
        data += chunk;
    });
    request.on('end', function () {
        var filters = JSON.parse(data);
        if (filters.name != "")
            client.execute("SELECT * FROM books WHERE " +
                "name LIKE ? AND " +
                "sales>=? AND sales<=? ALLOW FILTERING;", ['%'+filters.name+'%', parseInt(filters.sales_from), parseInt(filters.sales_to)], parse);
        if (filters.name == "")
            client.execute("SELECT * FROM books WHERE " +
                "sales>=? AND sales<=? ALLOW FILTERING;", [parseInt(filters.sales_from), parseInt(filters.sales_to)], parse);
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
