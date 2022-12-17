var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var url =  "mongodb://localhost:27017";
MongoClient.connect(url, function(err, client){
  if (err) {
    console.log(err);
  }
  else {
    var db = client.db("cats-db");
    var collection = db.collection("cats");
    var cats = [
      {id: 1, name: "Барсик", color: "рыжий", sex: "м"},
      {id: 2, name: "Рыжик", color: "рыжий", sex: "м"},
      {id: 3, name: "Бимка", color: "черепаший", sex: "ж"},
      {id: 4, name: "Пушок", color: "белый", sex: "м"},
      {id: 5, name: "Влас", color: "черный", sex: "м"},
      {id: 6, name: "Мурка", color: "рыжий", sex: "ж"},
      {id: 7, name: "Евген", color: "серый", sex: "м"},
      {id: 8, name: "Барсик", color: "черепаший", sex: "ж"},
      {id: 9, name: "Соня", color: "белый", sex: "ж"},
      {id: 10, name: "Носик", color: "рыжий", sex: "м"},
      {id: 11, name: "Уголек", color: "черный", sex: "м"},
      {id: 12, name: "Котик", color: "белый", sex: "м"},
      {id: 13, name: "Дуся", color: "черепаший", sex: "ж"},
      {id: 14, name: "Тося", color: "рыжий", sex: "ж"},
      {id: 15, name: "Маруся", color: "черный", sex: "м"},
      {id: 16, name: "Илья", color: "рыжий", sex: "м"},
      {id: 17, name: "Миша", color: "черно-белый", sex: "м"},
      {id: 18, name: "Вася", color: "черный", sex: "м"},
      {id: 19, name: "Китя", color: "черепаший", sex: "ж"},
      {id: 20, name: "Шарик", color: "рыже-белый", sex: "м"}
    ];
    collection.insertMany(cats, function(err, result){
      if (err) {
        console.log(err);
      }
      else {
        collection.createIndex({"$**": "text"})
        console.log('Ok');
      }
      client.close();
    });
  }
});
