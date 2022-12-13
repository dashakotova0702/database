package katya.laba2;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

class OlympiadDao {
    private final Connection connection;
    private final Statement statement;

    public OlympiadDao(Connection connection) throws SQLException {
        this.connection = connection;
        this.statement = connection.createStatement();
    }
    public void createTable() throws SQLException {
        statement.execute("CREATE TABLE Olympiad (id int AUTO_INCREMENT, name char(20), surname char(20), " +
                "country char(20), point float)");
    }
    public void insert(Olympiad olympiad) throws SQLException {
        PreparedStatement prepareSt = this.connection.prepareStatement("INSERT INTO Olympiad (name, surname, country, point) " +
                "values (?,?,?,?)");
        prepareSt.setString(1, olympiad.getName());
        prepareSt.setString(2, olympiad.getSurname());
        prepareSt.setString(3, olympiad.getCountry());
        prepareSt.setFloat(4, olympiad.getPoint());
        prepareSt.executeUpdate();
    }
    public List<Olympiad> getOlympiadListByCountry(String country) throws SQLException {
        PreparedStatement prepareSt = this.connection.prepareStatement("SELECT * FROM Olympiad WHERE country = (?)");
        prepareSt.setString(1, country);
        ResultSet resultSet = prepareSt.executeQuery();
        List<Olympiad> list = new ArrayList<>();
        while (resultSet.next()) {
            list.add(new Olympiad(resultSet.getInt("id"), resultSet.getString("name"),
                    resultSet.getString("surname"), resultSet.getString("country"),
                    resultSet.getFloat("point")));
        }
        return list;
    }
    public List<Olympiad> getOlympiadListByMorePoints(Float point) throws SQLException {
        PreparedStatement prepareSt = this.connection.prepareStatement("SELECT * FROM Olympiad WHERE point > (?)");
        prepareSt.setFloat(1, point);
        ResultSet resultSet = prepareSt.executeQuery();
        List<Olympiad> list = new ArrayList<>();
        while (resultSet.next()) {
            list.add(new Olympiad(resultSet.getInt("id"), resultSet.getString("name"),
                    resultSet.getString("surname"), resultSet.getString("country"),
                    resultSet.getFloat("point")));
        }
        return list;
    }
}
