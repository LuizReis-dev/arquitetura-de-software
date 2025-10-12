package commands;

import java.util.Map;

public class CommandFactory {
    public static Command create(String input, String argument) {
        Map<String, Command> map = Map.of(
            "log", new RegisterLogCommand(argument),
            "show", new ShowLogCommand(argument)
        );
        return map.getOrDefault(input, () -> System.out.println("Unknown command"));
    }
}
