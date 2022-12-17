var neo4j = require("neo4j-driver");
var uri =  'bolt://localhost:7687';
var user = 'neo4j';
var password = 'neo4jj';
var driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
var session = driver.session();

session.run(
  "CREATE (orange:color {name_color:'рыжий'})" +
  "CREATE (turtle:color {name_color:'черепаший'})" +
  "CREATE (white:color {name_color:'белый'})" +
  "CREATE (black:color {name_color:'черный'})" +
  "CREATE (gray:color {name_color:'серый'})" +
  "CREATE (black_white:color {name_color:'черно-белый'})" +
  "CREATE (orange_white:color {name_color:'рыже-белый'})" +
  "CREATE (barsik:cat {name:'Барсик'})" +
  "CREATE (ryzhik:cat {name:'Рыжик'})" +
  "CREATE (bimka:cat {name:'Бимка'})" +
  "CREATE (pushok:cat {name:'Пушок'})" +
  "CREATE (vlas:cat {name:'Влас'})" +
  "CREATE (murka:cat {name:'Мурка'})" +
  "CREATE (evgen:cat {name:'Евген'})" +
  "CREATE (barsik2:cat {name:'Барсик'})" +
  "CREATE (sonya:cat {name:'Соня'})" +
  "CREATE (nosik:cat {name:'Носик'})" +
  "CREATE (ugolek:cat {name:'Уголек'})" +
  "CREATE (kotik:cat {name:'Котик'})" +
  "CREATE (dusya:cat {name:'Дуся'})" +
  "CREATE (tosya:cat {name:'Тося'})" +
  "CREATE (marusya:cat {name:'Маруся'})" +
  "CREATE (ilia:cat {name:'Илья'})" +
  "CREATE (misha:cat {name:'Миша'})" +
  "CREATE (vasya:cat {name:'Вася'})" +
  "CREATE (kitya:cat {name:'Китя'})" +
  "CREATE (sharik:cat {name:'Шарик'})" +
  "CREATE" +
    "(orange)-[:sex {sex_:'м'}]->(barsik)," +
    "(orange)-[:sex {sex_:'м'}]->(ryzhik)," +
    "(turtle)-[:sex {sex_:'ж'}]->(bimka)," +
    "(white)-[:sex {sex_:'м'}]->(pushok)," +
    "(black)-[:sex {sex_:'м'}]->(vlas)," +
    "(orange)-[:sex {sex_:'ж'}]->(murka)," +
    "(gray)-[:sex {sex_:'м'}]->(evgen)," +
    "(turtle)-[:sex {sex_:'ж'}]->(barsik2)," +
    "(white)-[:sex {sex_:'ж'}]->(sonya)," +
    "(orange)-[:sex {sex_:'м'}]->(nosik)," +
    "(black)-[:sex {sex_:'м'}]->(ugolek)," +
    "(white)-[:sex {sex_:'м'}]->(kotik)," +
    "(turtle)-[:sex {sex_:'ж'}]->(dusya)," +
    "(orange)-[:sex {sex_:'ж'}]->(tosya)," +
    "(black)-[:sex {sex_:'ж'}]->(marusya)," +
    "(orange)-[:sex {sex_:'м'}]->(ilia)," +
    "(black_white)-[:sex {sex_:'м'}]->(misha)," +
    "(black)-[:sex {sex_:'м'}]->(vasya)," +
    "(turtle)-[:sex {sex_:'ж'}]->(kitya)," +
    "(orange_white)-[:sex {sex_:'м'}]->(sharik);"
    
).then(result => {
  console.log(result)
  session.close()
  driver.close()
});
