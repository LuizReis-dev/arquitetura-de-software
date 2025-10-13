package service;

import models.User;

import java.util.Map;

public class UserServiceSingletonImpl implements UserService {
    private static UserServiceSingletonImpl instance = null;
    private final Map<String, User> DB = Map.of(
            "normal", new User("Normal", false),
            "premium", new User("Premium", true)
    );
    private static User loggedUser = null;

    private UserServiceSingletonImpl() {}

    public static UserServiceSingletonImpl getInstance() {
        if (instance == null) {
            instance = new UserServiceSingletonImpl();
        }
        return instance;
    }
    @Override
    public void login(String username) {
        loggedUser = DB.get(username);
        if (loggedUser == null) {
            System.out.println("User not found!");
        }
    }

    @Override
    public User getLoggedUser() {
        return loggedUser;
    }
}
