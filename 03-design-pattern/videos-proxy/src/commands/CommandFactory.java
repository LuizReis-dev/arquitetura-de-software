package commands;

import java.util.Map;

public class CommandFactory {

    public static Command getCommand(String command, String argument) {
        Map<String, Command> commands = Map.of(
                "enter", new LoginCommand(argument),
                "watch", new WatchVideoCommand(argument)
        );
        return commands.getOrDefault(command, () -> System.out.println("Unknown command"));
    }
}
