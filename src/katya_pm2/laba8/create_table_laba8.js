var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var url =  "mongodb://localhost:27017";
MongoClient.connect(url, function(err, client){
  if (err) {
    console.log(err);
  }
  else {
    var db = client.db("olympiad-db");
    var collection = db.collection("olympiad");
    var products = [
      {id: 1, name: "Анна", surname: "Щербакова", country: "Россия", points: 255.95},
      {id: 2, name: "Александра", surname: "Трусова", country: "Россия", points: 251.73},
      {id: 3, name: "Каори", surname: "Сакамото", country: "Япония", points: 233.13},
      {id: 4, name: "Камила", surname: "Валиева", country: "Россия", points: 224.09},
      {id: 5, name: "Вакаба", surname: "Хигучи", country: "Япония", points: 214.44},
      {id: 6, name: "Ю", surname: "Ен", country: "Южная Корея", points: 213.0},
      {id: 7, name: "Алиса", surname: "Лью", country: "США", points: 208.95},
      {id: 8, name: "Ким Йе", surname: "Лим", country: "Южная Корея", points: 202.63},
      {id: 9, name: "Луна", surname: "Хендрикс", country: "Бельгия", points: 206.79},
      {id: 10, name: "Мэрайя", surname: "Белл", country: "США", points: 202.30},
      {id: 11, name: "Анастасия", surname: "Губанова", country: "Грузия", points: 200.98},
      {id: 12, name: "Екатерина", surname: "Куракова", country: "Польша", points: 185.84},
      {id: 13, name: "Виктория", surname: "Сафонова", country: "Беларусь", points: 184.83},
      {id: 14, name: "Ольга", surname: "Микутина", country: "Австрия", points: 182.20},
      {id: 15, name: "Екатерина", surname: "Рябова", country: "Азербайджан", points: 179.97},
      {id: 16, name: "Карен", surname: "Чен", country: "США", points: 179.93},
      {id: 17, name: "Николь", surname: "Шотт", country: "Германия", points: 177.65},
      {id: 18, name: "Линдсей ван", surname: "Зандерт", country: "Нидерланды", points: 175.81},
      {id: 19, name: "Маделин", surname: "Скиза", country: "Канада", points: 175.56},
      {id: 20, name: "Элишка", surname: "Бржезинова", country: "Чехия", points: 175.41}
    ];
    collection.insertMany(products, function(err, result){
      if (err) {
        console.log(err);
      }
      else {
        console.log('Ok');
      }
      client.close();
    });
  }
});
