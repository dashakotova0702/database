package laba2;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

record Product(int id, String name, float count, String units, String type) {}

class ProductDao {
    private final Connection conn;
    private final Statement st;
    private PreparedStatement pr_st;
    public void setPreparedStatement(String sql) throws SQLException {
        this.pr_st = this.conn.prepareStatement(sql);
    }

    public ProductDao(Connection conn) throws SQLException {
        this.conn = conn;
        this.st =  conn.createStatement();
    }
    public void createTable() throws SQLException {
        st.execute("CREATE TABLE Products (id int AUTO_INCREMENT, name char(40), count float, units char(5), type char(50))");
    }
    public void insertProduct(Product prdct) throws SQLException {
        setPreparedStatement("INSERT INTO Products (name, count, units, type) values ((?), (?), (?), (?))");
        pr_st.setString(1, prdct.name());
        pr_st.setFloat(2, prdct.count());
        pr_st.setString(3, prdct.units());
        pr_st.setString(4, prdct.type());
        pr_st.executeUpdate();
    }
    public List<Product> getProducts() throws SQLException {
        ResultSet rs = st.executeQuery("SELECT * FROM Products");
        List<Product> list_of_products = new ArrayList<>();
        while (rs.next()) {
            list_of_products.add(new Product(rs.getInt("id"), rs.getString("name"), rs.getFloat("count"), rs.getString("units"), rs.getString("type")));
        }
        return list_of_products;
    }
    public List<Product> getProductsByType(String type) throws SQLException {
        setPreparedStatement("SELECT * FROM Products WHERE type=(?)");
        pr_st.setString(1, type);
        ResultSet rs = pr_st.executeQuery();
        List<Product> list_of_products = new ArrayList<>();
        while (rs.next()) {
            list_of_products.add(new Product(rs.getInt("id"), rs.getString("name"), rs.getFloat("count"), rs.getString("units"), rs.getString("type")));
        }
        return list_of_products;
    }
    public String getProduct(Product prdct) {
        return (prdct.id() + " " + prdct.name() + " " + prdct.count() + " " + prdct.units() + " " + prdct.type());
    }
    public void deleteProductById(int id) throws SQLException {
        setPreparedStatement("DELETE FROM Products WHERE id=(?)");
        pr_st.setInt(1, id);
        pr_st.execute();
    }
}

class ProductDb {
    private static Connection conn;
    private static final ProductDb instance = new ProductDb();
    private static ProductDao prdctDao;

    private ProductDb(){
    }
    public static ProductDb getInstance() {
        return instance;
    }
    public void connect() throws ClassNotFoundException, SQLException {
        Class.forName("org.h2.Driver");
        conn = DriverManager.getConnection("jdbc:h2:file:C:/Users/Dkot/IdeaProjects/database/products");
        prdctDao = new ProductDao(conn);
    }
    public ProductDao getProductDao() throws SQLException {
        return prdctDao;
    }
}

public class laba2 {
    public static void output(List<Product> list_of_products) throws SQLException {
        for (Product list_of_product : list_of_products) {
            System.out.println(ProductDb.getInstance().getProductDao().getProduct(list_of_product));
        }
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        ProductDb.getInstance().connect();
        /*laba2.ProductDb.getInstance().getProductDao().createTable();
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"картофель", 1.5F, "кг","овощи"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"лук", 1F, "кг","овощи"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"капуста", 0.7F, "кг","овощи"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"яблоко", 5F, "шт","фрукты"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"банан", 3F, "шт","фрукты"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"гречка", 1F, "кг","бакалея"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"рис", 1F, "кг","бакалея"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"пиво", 0.5F, "л","алкоголь"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"творог", 0.4F, "кг","молочная продукция"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"молоко", 1F, "л","молочная продукция"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"яйца", 10F, "шт","продукты животного происхождения"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"филе курицы", 0.9F, "кг","продукты животного происхождения"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"сыр", 0.5F, "кг","молочная продукция"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"сахар", 3F, "кг","бакалея"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"какао-порошок", 0.3F, "кг","бакалея"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"сметана", 0.2F, "кг","молочная продукция"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"вода", 1.5F, "кг","напитки"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"яблочный сок", 1F, "л","напитки"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"свиной фарш", 2.2F, "кг","продукты животного происхождения"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"мука", 1F, "кг","бакалея"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"сливочное масло", 0.4F, "кг","молочная продукция"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"шампиньоны", 0.7F, "кг","овощи"));
        laba2.ProductDb.getInstance().getProductDao().insertProduct(new laba2.laba3.Product(0,"колбаса", 0.6F, "кг","продукты животного происхождения"));*/
        output(ProductDb.getInstance().getProductDao().getProducts());
        //output(laba2.ProductDb.getInstance().getProductDao().getProductsByType("овощи"));
        //laba2.ProductDb.getInstance().getProductDao().deleteProductById(3);
    }
}
