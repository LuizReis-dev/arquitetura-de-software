package commands;

import service.UserService;
import service.UserServiceSingletonImpl;

public class LoginCommand implements  Command {
    private final String username;

    public LoginCommand(String username){
        this.username = username;
    }

    @Override
    public void execute() {
        UserService userService = UserServiceSingletonImpl.getInstance();
        userService.login(username);
    }
}
