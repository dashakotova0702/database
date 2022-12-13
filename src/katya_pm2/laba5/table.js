var sqlite3 = require("sqlite3").verbose()
var db = new sqlite3.Database("olympiad.db")

db.run("CREATE TABLE Olympiad (id integer primary key, name char(20), surname char(20), country char (20), points float)", function(err){
  if (err) {
    console.log(err);
  }
  else {
    var stmnt = db.prepare("INSERT INTO Olympiad (name, surname, country, points) values ((?), (?), (?), (?))", function(err){
      if (err) {
        console.log(err);
      }
      else {
        stmnt.run("Анна", "Щербакова", "Россия", 255.95);
        stmnt.run("Александра", "Трусова", "Россия", 251.73);
        stmnt.run("Каори", "Сакамото", "Япония", 233.13);
        stmnt.run("Камила", "Валиева", "Россия", 224.09);
        stmnt.run("Вакаба", "Хигучи", "Япония", 214.44);
        stmnt.run("Ю", "Ен", "Южная Корея", 213.0);
        stmnt.run("Алиса", "Лью", "США", 208.95);
        stmnt.run("Ким Йе", "Лим", "Южная Корея", 202.63);
        stmnt.run("Луна", "Хендрикс", "Бельгия", 206.79);
        stmnt.run("Мэрайя", "Белл", "США", 202.30);
        stmnt.run("Анастасия", "Губанова", "Грузия", 200.98);
        stmnt.run("Екатерина", "Куракова", "Польша", 185.84);
        stmnt.run("Виктория", "Сафонова", "Беларусь", 184.83);
        stmnt.run("Ольга", "Микутина", "Австрия", 182.20);
        stmnt.run("Екатерина", "Рябова", "Азербайджан", 179.97);
        stmnt.run("Карен", "Чен", "США", 179.93);
        stmnt.run("Николь", "Шотт", "Германия", 177.65);
        stmnt.run("Линдсей ван", "Зандерт", "Нидерланды", 175.81);
        stmnt.run("Маделин", "Скиза", "Канада", 175.56);
        stmnt.run("Элишка", "Бржезинова", "Чехия", 175.41);
        stmnt.finalize();
      }
    });
  }
});
