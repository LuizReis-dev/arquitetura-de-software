package commands;

public class DefaultCommand implements Command {
    public DefaultCommand() {
    }
    @Override
    public void execute() {
        System.out.println("Comando não reconhecido. Por favor, tente novamente.");
    }
}
