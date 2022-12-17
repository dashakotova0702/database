var cassandra = require("cassandra-driver")
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'books'});

client.execute("CREATE KEYSPACE Books WITH REPLICATION = {'class': 'SimpleStrategy','replication_factor': 1}");
client.execute("CREATE TABLE books.Books (id int PRIMARY KEY, name text, language text, sales int, genre text)");
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (1, 'Harry Potter', 'English', 500, 'Fantasy')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (2, 'Goosebumps', 'English', 350, 'Horror')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (3, 'Perry Masin', 'English', 300, 'Detective fiction')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (4, 'Berenstain Bears', 'English', 260, 'Childrens')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (5, 'Choose Your Own Adventure', 'English', 250, 'Gamebook')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (6, 'Diary of a Wimpy Kid', 'English', 250, 'Comedy')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (7, 'Sweet Valley High', 'English', 250, 'Young adult fiction')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (8, 'The Railway Series', 'English', 201, 'Childrens')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (9, 'Noddy', 'English', 200, 'Childrens')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (10, 'Nancy Drew', 'English', 200, 'Childrens Detective fiction')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (11, 'San-Antonio', 'French', 200, 'Detective fiction')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (12, 'Robert Langdon', 'English', 200, 'Mystery-thriller')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (13, 'Geronimo Stilton', 'Italian', 180, 'Childrens')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (14, 'Percy Jackson & the Olympians', 'English', 180, 'Fantasy')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (15, 'The Baby-sitters Club', 'English', 172, 'Childrens')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (16, 'Twilight', 'English', 160, 'Fantasy Romance Young adult fiction')")
client.execute("INSERT INTO books.Books (id, name, language, sales, genre) VALUES (17, 'Star Wars', 'English', 160, 'Space opera')")
client.execute("CREATE INDEX ON books.Books (genre)")