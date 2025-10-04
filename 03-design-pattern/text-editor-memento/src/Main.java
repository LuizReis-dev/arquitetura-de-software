import commands.Command;
import commands.CommandFactory;
import memento.TextCaretaker;
import memento.TextEditor;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line;

        System.out.println("=== Mini Editor de Texto ===");
        System.out.println("Comandos disponíveis:");
        System.out.println(" - escrever <texto>  → adiciona uma nova linha");
        System.out.println(" - desfazer          → remove a última linha escrita");
        System.out.println(" - listar            → mostra todo o texto");
        System.out.println(" - sair              → encerra o programa");
        System.out.println();
        TextEditor textEditor = new TextEditor();
        TextCaretaker caretaker = new TextCaretaker(textEditor);
        while (true) {
            System.out.print("> ");
            line = scanner.nextLine().trim();

            if (line.equalsIgnoreCase("sair")) {
                break;
            }

            String[] parts = line.split(" ", 2);
            String userCommand = parts[0];
            String argument = parts.length > 1 ? parts[1] : "";
            Command command = CommandFactory.createCommand(userCommand, argument, caretaker, textEditor);
            command.execute();
        }

        scanner.close();
        System.out.println("Programa encerrado.");
    }
}