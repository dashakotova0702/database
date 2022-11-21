package katya.laba2;

class Olympiad {
    private int id;
    private String name;
    private String surname;
    private String country;
    private float point;

    Olympiad(int id, String name, String surname, String country, float point) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.country = country;
        this.point = point;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getCountry() {
        return country;
    }

    public float getPoint() {
        return point;
    }
}
