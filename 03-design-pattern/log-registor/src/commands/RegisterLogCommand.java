package commands;

import singleton.LogSingleton;

public class RegisterLogCommand implements  Command {

    private final String message;

    public RegisterLogCommand(String message) {
        this.message = message;
    }

    @Override
    public void execute() {
        LogSingleton.getInstance().addLog(message);
    }
}
