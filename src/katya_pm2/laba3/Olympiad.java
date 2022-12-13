package katya.laba3;

import com.j256.ormlite.field.DataType;
import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@DatabaseTable(tableName = "Olympiad")
public class Olympiad {
    @DatabaseField(generatedId = true)
    private int id;
    @DatabaseField(columnName = "name", dataType = DataType.STRING)
    private String name;
    @DatabaseField(columnName = "surname", dataType = DataType.STRING)
    private String surname;
    @DatabaseField(columnName = "country", dataType = DataType.STRING)
    private String country;
    @DatabaseField(columnName = "point", dataType = DataType.FLOAT)
    private float point;

    public Olympiad() {}
    public Olympiad(String name, String surname, String country, float point) {
        this.name = name;
        this.surname = surname;
        this.country = country;
        this.point = point;
    }
    public int getId() { return id; }
    public String getName() { return name; }
    public String getSurname() { return surname; }
    public String getCountry() { return country; }
    public float getPoint() { return point; }
}
