package katya.laba2;

import java.sql.*;
import java.util.List;

public class laba2 {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        OlympiadDb.getInstance().connect();
        /*OlympiadDb.getInstance().getOlympiadDao().createTable();
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Анна", "Щербакова",
                "Россия", 255.95F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Александра", "Трусова",
                "Россия", 251.73F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Каори", "Сакамото",
                "Япония", 233.13F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Камила", "Валиева",
                "Россия", 224.09F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Вакаба", "Хигучи",
                "Япония", 214.44F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Ю", "Ен",
                "Южная Корея", 213.09F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Алиса", "Лью",
                "США", 208.95F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Ким Йе", "Лим",
                "Южная Корея", 202.63F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Луна", "Хендрикс",
                "Бельгия", 206.79F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Мэрайя", "Белл",
                "США", 202.30F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Анастасия", "Губанова",
                "Грузия", 200.98F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Екатерина", "Куракова",
                "Польша", 185.84F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Виктория", "Сафонова",
                "Беларусь", 184.83F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Ольга", "Микутина",
                "Австрия", 182.20F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Екатерина", "Рябова",
                "Азербайджан", 179.97F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Карен", "Чен",
                "США", 179.93F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Николь", "Шотт",
                "Германия", 177.65F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Линдсей ван", "Зандерт",
                "Нидерланды", 175.81F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Маделин", "Скиза",
                "Канада", 175.56F));
        OlympiadDb.getInstance().getOlympiadDao().insert(new Olympiad(0, "Элишка", "Бржезинова",
                "Чехия", 175.41F));*/
        List<Olympiad> list = OlympiadDb.getInstance().getOlympiadDao().getOlympiadListByCountry("Япония");
        for (Olympiad o : list) {
            System.out.println(o.getId() + " " + o.getName() + " " + o.getSurname() + " " + o.getCountry() + " " + o.getPoint());
        }
        System.out.println("-----------------------------------------------------------------------------------");
        list = OlympiadDb.getInstance().getOlympiadDao().getOlympiadListByMorePoints(220F);
        for (Olympiad o : list) {
            System.out.println(o.getId() + " " + o.getName() + " " + o.getSurname() + " " + o.getCountry() + " " + o.getPoint());
        }
    }
}
