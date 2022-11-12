var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var url =  "mongodb://localhost:27017";
MongoClient.connect(url, function(err, client){
  if (err) {
    console.log("Can't connect:", err);
  }
  else {
    var db = client.db("products-db");
    var collection = db.collection("products");
    var products = [
      {id: 1, name: "картофель", count: 1.5, units: "кг", type: "овощи"},
      {id: 2, name: "лук", count: 1, units: "кг", type: "овощи"},
      {id: 3, name: "капуста", count: 0.7, units: "кг", type: "овощи"},
      {id: 4, name: "яблоко", count: 5, units: "шт", type: "фрукты"},
      {id: 5, name: "банан", count: 3, units: "шт", type: "фрукты"},
      {id: 6, name: "гречка", count: 1, units: "кг", type: "бакалея"},
      {id: 7, name: "рис", count: 1, units: "кг", type: "бакалея"},
      {id: 8, name: "пиво", count: 0.5, units: "л", type: "алкоголь"},
      {id: 9, name: "творог", count: 0.4, units: "кг", type: "молочная продукция"},
      {id: 10, name: "молоко", count: 1, units: "л", type: "молочная продукция"},
      {id: 11, name: "яйца", count: 10, units: "шт", type: "продукты животного происхождения"},
      {id: 12, name: "филе курицы", count: 0.9, units: "кг", type: "продукты животного происхождения"},
      {id: 13, name: "сыр", count: 0.5, units: "кг", type: "молочная продукция"},
      {id: 14, name: "сахар", count: 3, units: "кг", type: "бакалея"},
      {id: 15, name: "какао-порошок", count: 0.3, units: "кг", type: "бакалея"},
      {id: 16, name: "сметана", count: 0.2, units: "кг", type: "молочная продукция"},
      {id: 17, name: "вода", count: 1.5, units: "кг", type: "напитки"},
      {id: 18, name: "яблочный сок", count: 1, units: "л", type: "напитки"},
      {id: 19, name: "свиной фарш", count: 2.2, units: "кг", type: "продукты животного происхождения"},
      {id: 20, name: "мука", count: 1, units: "кг", type: "бакалея"},
      {id: 21, name: "сливочное масло", count: 0.4, units: "кг", type: "молочная продукция"},
      {id: 22, name: "шампиньоны", count: 0.7, units: "кг", type: "овощи"},
      {id: 23, name: "колбаса", count: 0.6, units: "кг", type: "продукты животного происхождения"}
    ];
    collection.insertMany(products, function(err, result){
      if (err) {
        console.log("Can't insert to table: ", err);
      }
      else {
        console.log('Ok');
      }
      client.close();
    });
  }
});
