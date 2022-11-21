package katya.laba2;

import java.sql.*;

class OlympiadDb {
    private static Connection connection;
    private static final OlympiadDb instance = new OlympiadDb();
    private static OlympiadDao olympiadDao;

    private OlympiadDb() {}
    public static OlympiadDb getInstance() {
        return instance;
    }
    public void connect() throws SQLException, ClassNotFoundException {
        Class.forName("org.h2.Driver");
        connection = DriverManager.getConnection("jdbc:h2:file:C:/Users/dasha/IdeaProjects/database/olympiad");
        olympiadDao = new OlympiadDao(connection);
    }
    public OlympiadDao getOlympiadDao() {
        return olympiadDao;
    }
}
