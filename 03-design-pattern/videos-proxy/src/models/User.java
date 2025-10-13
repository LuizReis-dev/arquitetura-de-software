package models;

public class User {
    private final String username;
    private final boolean isPremium;

    public User(String username, boolean isPremium) {
        this.username = username;
        this.isPremium = isPremium;
    }

    public String getUsername() {
        return username;
    }

    public boolean isPremium() {
        return isPremium;
    }
}
