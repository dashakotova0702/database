var http = require("http");

http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write("<!DOCTYPE html>\n" +
    "<html>\n" +
    " <head>\n" +
    " <meta charset='utf-8'>\n" +
    " </head>\n" +
    " <body>\n"
  );
  response.write("1. Анна Щербакова Россия 255,95 <br>" +
    "2. Александра Трусова Россия 251,73 <br>" +
    "3. Каори Сакамото Япония 233,13 <br>" +
    "4. Камила Валиева Россия 224,09 <br>" +
    "5. Вакаба Хигучи Япония 214,44 <br>" +
    "6. Ю Ен Южная Корея 213,09 <br>" +
    "7. Алиса Лью США 208,95 <br>" +
    "8. Ким Йе Лим Южная Корея 202,63 <br>" +
    "9. Луна Хендрикс Бельгия 206,79 <br>" +
    "10. Мэрайя Белл США 202,30 <br>" +
    "11. Анастасия Губанова Грузия 200,98 <br>" +
    "12. Екатерина Куракова Польша 185,84 <br>" +
    "13. Виктория Сафонова Беларусь 184,83 <br>" +
    "14. Ольга Микутина Австрия 182,20 <br>" +
    "15. Екатерина Рябова Азербайджан 179,97 <br>" +
    "16. Карен Чен США 179,93 <br>" +
    "17. Николь Шотт Германия 177,65 <br>" +
    "18. Линдсей ван Зандерт Нидерланды 175,81 <br>" +
    "19. Маделин Скиза Канада 175,56 <br>" +
    "20. Элишка Бржезинова Чехия 175,41"
  );
  response.end(" </body>\n" +
    "</html>\n"
  );
}).listen(3000);
console.log("Server is running");
