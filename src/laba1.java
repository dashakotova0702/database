import java.sql.*;
import java.util.Objects;
import java.util.Scanner;

public class laba1 {
    public static void create_table(Statement st) throws SQLException {
        st.execute("CREATE TABLE Products (id int AUTO_INCREMENT, name char(20), count float, units char(5), type char(20))");
    }
    public static void insert(Scanner in, Connection conn) throws SQLException {
        String sql = "INSERT INTO Products (name, count, units, type) values ((?), (?), (?), (?))";
        try (PreparedStatement statement = conn.prepareStatement(sql)) {
            System.out.println("Name: ");
            String name = in.next();
            System.out.println("Count: ");
            float count = in.nextFloat();
            System.out.println("Unit: ");
            String unit = in.next();
            System.out.println("Type: ");
            String type = in.next();
            statement.setString(1, name);
            statement.setFloat(2, count);
            statement.setString(3, unit);
            statement.setString(4, type);
            statement.executeUpdate();
        }
    }
    public static void get_by(Scanner in, Connection conn, String by, String sql) throws SQLException {
        try (PreparedStatement statement = conn.prepareStatement(sql)) {
            if (!Objects.equals(by, "all")) {
                System.out.println("Value: ");
                if (Objects.equals(by, "count")) {
                    float count = in.nextFloat();
                    statement.setFloat(1, count);
                } else {
                    String value = in.next();
                    statement.setString(1, value);
                }
            }
            ResultSet result = statement.executeQuery();
            while (result.next()) {
                System.out.println(result.getString("id") + " " + result.getString("name") + " " + result.getString("count") + " " + result.getString("units") + " " + result.getString("type"));
            }
        }
    }
    public static void get_values(Statement st, Scanner in, Connection conn) throws SQLException {
        boolean bool = true;
        while (bool) {
            System.out.println("0. Get by id");
            System.out.println("1. Get by name");
            System.out.println("2. Get by count");
            System.out.println("3. Get by units");
            System.out.println("4. Get by type");
            System.out.println("5. Get all");
            System.out.println("6. Back");
            int count = in.nextInt();
            switch (count) {
                case 0 -> {
                    get_by(in, conn, "id", "SELECT * FROM Products WHERE id=(?)");
                }
                case 1 -> {
                    get_by(in, conn, "name", "SELECT * FROM Products WHERE name=(?)");
                }
                case 2 -> {
                    get_by(in, conn, "count", "SELECT * FROM Products WHERE count=(?)");
                }
                case 3 -> {
                    get_by(in, conn, "units", "SELECT * FROM Products WHERE units=(?)");
                }
                case 4 -> {
                    get_by(in, conn, "type", "SELECT * FROM Products WHERE type=(?)");
                }
                case 5 -> {
                    get_by(in, conn, "all", "SELECT * FROM Products");
                }
                case 6 -> {
                    bool = false;
                }
            }
        }
    }
    public static void main(String[] args) {
        try {
            Class.forName("org.h2.Driver");
            Connection conn = DriverManager.getConnection("jdbc:h2:file:C:/Users/dasha/IdeaProjects/database/products");
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT * FROM Products WHERE (count > 3.0 and type = 'фрукты')");
            while (rs.next()) {
                System.out.println(rs.getString("id") + " " + rs.getString("name") + " " + rs.getString("count") + " " + rs.getString("units") + " " + rs.getString("type"));
            }
            Scanner in = new Scanner(System.in);
            while (true) {
                System.out.println("0. Create table Products");
                System.out.println("1. Insert products to table");
                System.out.println("2. Get products from table");
                System.out.println("3. Exit");
                int count = in.nextInt();
                switch (count) {
                    case 0 -> {
                        create_table(st);
                    }
                    case 1 -> {
                        insert(in, conn);
                    }
                    case 2 -> {
                        get_values(st, in, conn);
                    }
                    case 3 -> {
                        System.exit(0);
                    }
                }
            }
        }
        catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }
    }
}

