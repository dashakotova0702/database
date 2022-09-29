package laba3;

import com.j256.ormlite.dao.Dao;
import com.j256.ormlite.dao.DaoManager;
import com.j256.ormlite.jdbc.JdbcConnectionSource;
import com.j256.ormlite.support.ConnectionSource;
import com.j256.ormlite.table.TableUtils;
import java.util.List;

public class laba3 {
    public static void output (List<Product> list_of_products) {
        for (Product prdct : list_of_products) {
            System.out.println(prdct.getId() + " " + prdct.getName() + " " + prdct.getCount() + " " + prdct.getUnits() + " " + prdct.getType());
        }
    }
    public static void main(String[] args) throws Exception {
        Class.forName("org.h2.Driver");
        ConnectionSource connSource = new JdbcConnectionSource("jdbc:h2:file:C:/Users/Dkot/IdeaProjects/database/products");
        Dao<Product, Integer> productDao = DaoManager.createDao(connSource, Product.class);
        //TableUtils.createTable(connSource, Product.class);
        /*productDao.create(new Product("картофель", 1.5F, "кг","овощи"));
        productDao.create(new Product("лук", 1F, "кг","овощи"));
        productDao.create(new Product("капуста", 0.7F, "кг","овощи"));
        productDao.create(new Product("яблоко", 5F, "шт","фрукты"));
        productDao.create(new Product("банан", 3F, "шт","фрукты"));
        productDao.create(new Product("гречка", 1F, "кг","бакалея"));
        productDao.create(new Product("рис", 1F, "кг","бакалея"));
        productDao.create(new Product("пиво", 0.5F, "л","алкоголь"));
        productDao.create(new Product("творог", 0.4F, "кг","молочная продукция"));
        productDao.create(new Product("молоко", 1F, "л","молочная продукция"));
        productDao.create(new Product("яйца", 10F, "шт","продукты животного происхождения"));
        productDao.create(new Product("филе курицы", 0.9F, "кг","продукты животного происхождения"));
        productDao.create(new Product("сыр", 0.5F, "кг","молочная продукция"));
        productDao.create(new Product("сахар", 3F, "кг","бакалея"));
        productDao.create(new Product("какао-порошок", 0.3F, "кг","бакалея"));
        productDao.create(new Product("сметана", 0.2F, "кг","молочная продукция"));
        productDao.create(new Product("вода", 1.5F, "кг","напитки"));
        productDao.create(new Product("яблочный сок", 1F, "л","напитки"));
        productDao.create(new Product("свиной фарш", 2.2F, "кг","продукты животного происхождения"));
        productDao.create(new Product("мука", 1F, "кг","бакалея"));
        productDao.create(new Product("сливочное масло", 0.4F, "кг","молочная продукция"));
        productDao.create(new Product("шампиньоны", 0.7F, "кг","овощи"));
        productDao.create(new Product("колбаса", 0.6F, "кг","продукты животного происхождения"));*/
        productDao.deleteById(2);
        output(productDao.queryForAll());
        output(productDao.queryForEq("type", "молочная продукция"));
        connSource.close();
    }
}
