package katya.laba1;

import java.sql.*;

public class laba1 {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("org.h2.Driver");
        Connection conn = DriverManager.getConnection("jdbc:h2:file:C:/Users/dasha/IdeaProjects/database/olympiad");
        Statement st = conn.createStatement();
        /*st.execute("CREATE TABLE Olympiad (id int AUTO_INCREMENT, name char(20), surname char(20), country char(20), point float)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Анна', 'Щербакова', 'Россия', 255.95)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Александра', 'Трусова', 'Россия', 251.73)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Каори', 'Сакамото', 'Япония', 233.13)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Камила', 'Валиева', 'Россия', 224.09)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Вакаба', 'Хигучи', 'Япония', 214.44)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Ю', 'Ен', 'Южная Корея', 213.09)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Алиса', 'Лью', 'США', 208.95)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Ким Йе', 'Лим', 'Южная Корея', 202.63)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Луна', 'Хендрикс', 'Бельгия', 206.79)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Мэрайя', 'Белл', 'США', 202.30)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Анастасия', 'Губанова', 'Грузия', 200.98)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Екатерина', 'Куракова', 'Польша', 185.84)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Виктория', 'Сафонова', 'Беларусь', 184.83)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Ольга', 'Микутина', 'Австрия', 182.20)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Екатерина', 'Рябова', 'Азербайджан', 179.97)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Карен', 'Чен', 'США', 179.93)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Николь', 'Шотт', 'Германия', 177.65)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Линдсей ван', 'Зандерт', 'Нидерланды', 175.81)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Маделин', 'Скиза', 'Канада', 175.56)");
        st.execute("INSERT INTO Olympiad (name, surname, country, point) values ('Элишка', 'Бржезинова', 'Чехия', 175.41)");*/
        ResultSet resultSet = st.executeQuery("SELECT * FROM Olympiad WHERE country = 'Россия'");
        while (resultSet.next()) {
            System.out.println(resultSet.getString("id") + " " + resultSet.getString("name") + " "
                    + resultSet.getString("surname") + " " + resultSet.getString("country") + " " +
                    resultSet.getString("point"));
        }
        System.out.println("-----------------------------------------------------------------------------------");
        resultSet = st.executeQuery("SELECT * FROM Olympiad WHERE point > 200");
        while (resultSet.next()) {
            System.out.println(resultSet.getString("id") + " " + resultSet.getString("name") + " "
                    + resultSet.getString("surname") + " " + resultSet.getString("country") + " " +
                    resultSet.getString("point"));
        }
        System.out.println("-----------------------------------------------------------------------------------");
        resultSet = st.executeQuery("SELECT * FROM Olympiad WHERE (point > 200 and country = 'США')");
        while (resultSet.next()) {
            System.out.println(resultSet.getString("id") + " " + resultSet.getString("name") + " "
                    + resultSet.getString("surname") + " " + resultSet.getString("country") + " " +
                    resultSet.getString("point"));
        }
        System.out.println("-----------------------------------------------------------------------------------");
    }
}
