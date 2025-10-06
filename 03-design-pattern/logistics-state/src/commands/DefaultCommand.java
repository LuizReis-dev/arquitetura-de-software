package commands;

public class DefaultCommand implements Command {
    @Override
    public void execute(String packageCode, java.util.Map<String, states.PackageContext> packages) {
        System.out.println("Unknown command. Please try again.");
    }
}
