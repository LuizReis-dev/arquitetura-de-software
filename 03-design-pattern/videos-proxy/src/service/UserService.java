package service;

import models.User;

public interface UserService {
    void login(String username);
    User getLoggedUser();
}
