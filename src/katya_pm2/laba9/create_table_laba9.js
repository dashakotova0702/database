var neo4j = require("neo4j-driver");
var uri =  'bolt://localhost:7687';
var user = 'neo4j';
var password = 'neo4jj';
var driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
var session = driver.session();

session.run(
  "CREATE (russia:country {name_country:'Россия'})" +
  "CREATE (japan:country {name_country:'Япония'})" +
  "CREATE (south_korea:country {name_country:'Южная Корея'})" +
  "CREATE (USA:country {name_country:'США'})" +
  "CREATE (georgia:country {name_country:'Грузия'})" +
  "CREATE (belguim:country {name_country:'Бельгия'})" +
  "CREATE (poland:country {name_country:'Польша'})" +
  "CREATE (belarus:country {name_country:'Беларусь'})" +
  "CREATE (austria:country {name_country:'Австрия'})" +
  "CREATE (azerbaijan:country {name_country:'Азербайджан'})" +
  "CREATE (germany:country {name_country:'Германия'})" +
  "CREATE (netherlands:country {name_country:'Нидерланды'})" +
  "CREATE (canada:country {name_country:'Канада'})" +
  "CREATE (czech:country {name_country:'Чехия'})" +
  "CREATE (a_sher:person {name:'Анна', surname:'Щербакова'})" +
  "CREATE (a_trus:person {name:'Александра', surname:'Трусова'})" +
  "CREATE (k_sak:person {name:'Каори', surname:'Сакамото'})" +
  "CREATE (k_val:person {name:'Камила', surname:'Валиева'})" +
  "CREATE (v_hig:person {name:'Вакаба', surname:'Хигучи'})" +
  "CREATE (yu_en:person {name:'Ю', surname:'Ен'})" +
  "CREATE (a_lue:person {name:'Алиса', surname:'Лью'})" +
  "CREATE (k_lim:person {name:'Ким Йе', surname:'Лим'})" +
  "CREATE (l_hen:person {name:'Луна', surname:'Хендрикс'})" +
  "CREATE (m_bel:person {name:'Мэрайя', surname:'Белл'})" +
  "CREATE (a_gub:person {name:'Анастасия', surname:'Губанова'})" +
  "CREATE (e_kur:person {name:'Екатерина', surname:'Куракова'})" +
  "CREATE (v_saf:person {name:'Виктория', surname:'Сафонова'})" +
  "CREATE (o_mik:person {name:'Ольга', surname:'Микутина'})" +
  "CREATE (e_ryab:person {name:'Екатерина', surname:'Рябова'})" +
  "CREATE (k_chen:person {name:'Карен', surname:'Чен'})" +
  "CREATE (n_shott:person {name:'Николь', surname:'Шотт'})" +
  "CREATE (l_zan:person {name:'Линдсей ван', surname:'Зандерт'})" +
  "CREATE (m_skiza:person {name:'Маделин', surname:'Скиза'})" +
  "CREATE (e_brzh:person {name:'Элишка', surname:'Бржезинова'})" +
  "CREATE" +
    "(a_sher)-[:result {points:255.95}]->(russia)," +
    "(a_trus)-[:result {points:251.73}]->(russia)," +
    "(k_sak)-[:result {points:233.13}]->(japan)," +
    "(k_val)-[:result {points:224.09}]->(russia)," +
    "(v_hig)-[:result {points:214.44}]->(japan)," +
    "(yu_en)-[:result {points:213.0}]->(south_korea)," +
    "(a_lue)-[:result {points:208.95}]->(USA)," +
    "(k_lim)-[:result {points:202.63}]->(south_korea)," +
    "(l_hen)-[:result {points:206.79}]->(belguim)," +
    "(m_bel)-[:result {points:202.30}]->(USA)," +
    "(a_gub)-[:result {points:200.98}]->(georgia)," +
    "(e_kur)-[:result {points:185.84}]->(poland)," +
    "(v_saf)-[:result {points:184.83}]->(belarus)," +
    "(o_mik)-[:result {points:182.20}]->(austria)," +
    "(e_ryab)-[:result {points:179.97}]->(azerbaijan)," +
    "(k_chen)-[:result {points:179.93}]->(USA)," +
    "(n_shott)-[:result {points:177.65}]->(germany)," +
    "(l_zan)-[:result {points:175.81}]->(netherlands)," +
    "(m_skiza)-[:result {points:175.56}]->(canada)," +
    "(e_brzh)-[:result {points:175.41}]->(czech);"
).then(result => {
  console.log(result)
  session.close()
  driver.close()
});
