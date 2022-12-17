var cassandra = require("cassandra-driver")
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'Cats'});

client.execute("CREATE KEYSPACE Cats WITH REPLICATION = {'class': 'SimpleStrategy','replication_factor': 1}");
client.execute("CREATE TABLE Cats.Cats (id int PRIMARY KEY, name text, color text, sex text)");
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (1, 'Барсик', 'рыжий', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (2, 'Рыжик', 'рыжий', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (3, 'Бимка', 'черепаший', 'ж')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (4, 'Пушок', 'белый', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (5, 'Влас', 'черный', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (6, 'Мурка', 'рыжий', 'ж')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (7, 'Евген', 'серый', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (8, 'Барсик', 'черепаший', 'ж')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (9, 'Соня', 'белый', 'ж')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (10, 'Носик', 'рыжий', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (11, 'Уголек', 'черный', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (12, 'Котик', 'белый', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (13, 'Дуся', 'черепаший', 'ж')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (14, 'Тося', 'рыжий', 'ж')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (15, 'Маруся', 'черный', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (16, 'Илья', 'рыжий', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (17, 'Миша', 'черно-белый', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (18, 'Вася', 'черный', 'м')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (19, 'Китя', 'черепаший', 'ж')")
client.execute("INSERT INTO Cats.Cats (id, name, color, sex) VALUES (20, 'Шарик', 'рыже-белый', 'м')")
client.execute("CREATE INDEX ON Cats.Cats (color)")
client.execute("SELECT * FROM Cats.Cats");