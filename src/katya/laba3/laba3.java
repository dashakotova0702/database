package katya.laba3;

import com.j256.ormlite.dao.Dao;
import com.j256.ormlite.dao.DaoManager;
import com.j256.ormlite.jdbc.JdbcConnectionSource;
import com.j256.ormlite.support.ConnectionSource;
import com.j256.ormlite.table.TableUtils;
import java.util.List;

public class laba3 {
    public static void main(String[] args) throws Exception {
        Class.forName("org.h2.Driver");
        ConnectionSource connSource = new JdbcConnectionSource("jdbc:h2:file:C:/Users/dasha/IdeaProjects/database/olympiad");
        Dao<Olympiad, Integer> olympiadDao = DaoManager.createDao(connSource, Olympiad.class);
        /*TableUtils.createTable(connSource, Olympiad.class);
        olympiadDao.create(new Olympiad("Анна", "Щербакова",
                "Россия", 255.95F));
        olympiadDao.create(new Olympiad("Александра", "Трусова",
                "Россия", 251.73F));
        olympiadDao.create(new Olympiad("Каори", "Сакамото",
                "Япония", 233.13F));
        olympiadDao.create(new Olympiad("Камила", "Валиева",
                "Россия", 224.09F));
        olympiadDao.create(new Olympiad("Вакаба", "Хигучи",
                "Япония", 214.44F));
        olympiadDao.create(new Olympiad("Ю", "Ен",
                "Южная Корея", 213.09F));
        olympiadDao.create(new Olympiad("Алиса", "Лью",
                "США", 208.95F));
        olympiadDao.create(new Olympiad("Ким Йе", "Лим",
                "Южная Корея", 202.63F));
        olympiadDao.create(new Olympiad("Луна", "Хендрикс",
                "Бельгия", 206.79F));
        olympiadDao.create(new Olympiad("Мэрайя", "Белл",
                "США", 202.30F));
        olympiadDao.create(new Olympiad("Анастасия", "Губанова",
                "Грузия", 200.98F));
        olympiadDao.create(new Olympiad("Екатерина", "Куракова",
                "Польша", 185.84F));
        olympiadDao.create(new Olympiad("Виктория", "Сафонова",
                "Беларусь", 184.83F));
        olympiadDao.create(new Olympiad("Ольга", "Микутина",
                "Австрия", 182.20F));
        olympiadDao.create(new Olympiad("Екатерина", "Рябова",
                "Азербайджан", 179.97F));
        olympiadDao.create(new Olympiad("Карен", "Чен",
                "США", 179.93F));
        olympiadDao.create(new Olympiad("Николь", "Шотт",
                "Германия", 177.65F));
        olympiadDao.create(new Olympiad("Линдсей ван", "Зандерт",
                "Нидерланды", 175.81F));
        olympiadDao.create(new Olympiad("Маделин", "Скиза",
                "Канада", 175.56F));
        olympiadDao.create(new Olympiad("Элишка", "Бржезинова",
                "Чехия", 175.41F));*/
        List<Olympiad> list = olympiadDao.queryForEq("country", "США");
        for (Olympiad o: list) {
            System.out.println(o.getId() + " " + o.getName() + " " + o.getSurname()
                    + " " + o.getCountry() + " " + o.getPoint());
        }
        System.out.println("-----------------------------------------------------------------------------------");
        list = olympiadDao.queryBuilder().where().gt("point", 180F).query();
        for (Olympiad o: list) {
            System.out.println(o.getId() + " " + o.getName() + " " + o.getSurname()
                    + " " + o.getCountry() + " " + o.getPoint());
        }
        System.out.println("-----------------------------------------------------------------------------------");
        connSource.close();
    }
}
