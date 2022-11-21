var neo4j = require("neo4j-driver");
var uri =  'bolt://localhost:7687';
var user = 'neo4j';
var password = 'neo4jj';
var driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
var session = driver.session();

session.run(
  "CREATE (fruit:type {name_type:'фрукты'})" +
  "CREATE (vegetables:type {name_type:'овощи'})" +
  "CREATE (grocery:type {name_type:'бакалея'})" +
  "CREATE (algocol:type {name_type:'алкоголь'})" +
  "CREATE (milk_products:type {name_type:'молочная продукция'})" +
  "CREATE (animal_products:type {name_type:'продукты животного происхождения'})" +
  "CREATE (drinks:type {name_type:'напитки'})" +
  "CREATE (potato:product {name:'картофель'})" +
  "CREATE (onion:product {name:'лук'})" +
  "CREATE (cabbage:product {name:'капуста'})" +
  "CREATE (apple:product {name:'яблоко'})" +
  "CREATE (banana:product {name:'банан'})" +
  "CREATE (buckwheat:product {name:'гречка'})" +
  "CREATE (rice:product {name:'рис'})" +
  "CREATE (beer:product {name:'пиво'})" +
  "CREATE (curd:product {name:'творог'})" +
  "CREATE (milk:product {name:'молоко'})" +
  "CREATE (eggs:product {name:'яйца'})" +
  "CREATE (chicken_fillet:product {name:'филе курицы'})" +
  "CREATE (cheese:product {name:'сыр'})" +
  "CREATE (sugar:product {name:'сахар'})" +
  "CREATE (cocoa_powder:product {name:'какао-порошок'})" +
  "CREATE (sour_cream:product {name:'сметана'})" +
  "CREATE (water:product {name:'вода'})" +
  "CREATE (apple_juice:product {name:'яблочный сок'})" +
  "CREATE (minced_pork:product {name:'свиной фарш'})" +
  "CREATE (flour:product {name:'мука'})" +
  "CREATE (butter:product {name:'сливочное масло'})" +
  "CREATE (champignons:product {name:'шампиньоны'})" +
  "CREATE (sausage:product {name:'колбаса'})" +
  "CREATE" +
    "(fruit)-[:buy {count_:5.0, units:'шт'}]->(apple)," +
    "(fruit)-[:buy {count_:3.0, units:'шт'}]->(banana)," +
    "(vegetables)-[:buy {count_:1.5, units:'кг'}]->(potato)," +
    "(vegetables)-[:buy {count_:1.0, units:'кг'}]->(onion)," +
    "(vegetables)-[:buy {count_:0.7, units:'кг'}]->(cabbage)," +
    "(vegetables)-[:buy {count_:0.7, units:'кг'}]->(champignons)," +
    "(grocery)-[:buy {count_:1.0, units:'кг'}]->(buckwheat)," +
    "(grocery)-[:buy {count_:1.0, units:'кг'}]->(rice)," +
    "(grocery)-[:buy {count_:3.0, units:'кг'}]->(sugar)," +
    "(grocery)-[:buy {count_:0.3, units:'кг'}]->(cocoa_powder)," +
    "(grocery)-[:buy {count_:1.0, units:'кг'}]->(flour)," +
    "(algocol)-[:buy {count_:0.5, units:'л'}]->(beer)," +
    "(milk_products)-[:buy {count_:0.4, units:'кг'}]->(curd)," +
    "(milk_products)-[:buy {count_:1.0, units:'л'}]->(milk)," +
    "(milk_products)-[:buy {count_:0.5, units:'кг'}]->(cheese)," +
    "(milk_products)-[:buy {count_:0.2, units:'кг'}]->(sour_cream)," +
    "(milk_products)-[:buy {count_:0.4, units:'кг'}]->(butter)," +
    "(animal_products)-[:buy {count_:10.0, units:'шт'}]->(eggs)," +
    "(animal_products)-[:buy {count_:0.9, units:'кг'}]->(chicken_fillet)," +
    "(animal_products)-[:buy {count_:2.2, units:'кг'}]->(minced_pork)," +
    "(animal_products)-[:buy {count_:0.6, units:'кг'}]->(sausage)," +
    "(drinks)-[:buy {count_:1.5, units:'л'}]->(water)," +
    "(drinks)-[:buy {count_:1.0, units:'л'}]->(apple_juice);"
).then(result => {
  console.log(result)
  session.close()
  driver.close()
});
