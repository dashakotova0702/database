package laba3;

import com.j256.ormlite.field.DataType;
import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@DatabaseTable(tableName = "Products")
public class Product {
    @DatabaseField(generatedId = true)
    private int id;
    @DatabaseField(columnName = "name", dataType = DataType.STRING)
    private String name;
    @DatabaseField(columnName = "count", dataType = DataType.FLOAT)
    private float count;
    @DatabaseField(columnName = "units", dataType = DataType.STRING)
    private String units;
    @DatabaseField(columnName = "type", dataType = DataType.STRING)
    private String type;

    public Product() {
    }

    public Product(String name, float count, String units, String type) {
        this.name = name;
        this.count = count;
        this.units = units;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public float getCount() {
        return count;
    }

    public String getUnits() {
        return units;
    }

    public String getType() {
        return type;
    }
}
