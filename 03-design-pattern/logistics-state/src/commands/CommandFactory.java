package commands;

import java.util.Map;

public class CommandFactory {

    public static Command getCommand(String command) {
        Map<String, Command> commandMap = Map.of(
                "register", new RegisterPackageCommand(),
                "status", new CheckStatusCommand()
        );
        return commandMap.getOrDefault(command, new DefaultCommand());
    }
}
