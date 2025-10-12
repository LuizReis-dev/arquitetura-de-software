//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.

//Uma empresa precisa de um aplicativo de console que registre eventos do sistema.
//Funcionalidades:
//
//O usuário digita "log <mensagem> "para registrar um evento.
//O sistema deve armazenar os logs em memória e permitir que o usuário digite mostrar para listar todos os eventos.
//O sistema deve permitir escolher diferentes tipos de saída de log: console, arquivo ou resumo diário.
//O programa roda até o usuário digitar sair.
import commands.Command;
import commands.CommandFactory;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line;
//        Map<String, PackageContext> packages = new java.util.HashMap<>();
        System.out.println("=== Log Registor ===");
        System.out.println("Available commands:");
        System.out.println(" - log <code>     → register a new log");
        System.out.println(" - show <type>    → console, file or summary");
        System.out.println(" - exit           → close the program");
        System.out.println();

        while (true) {
            System.out.print("> ");
            line = scanner.nextLine().trim();

            if (line.equalsIgnoreCase("exit")) {
                break;
            }

            String[] parts = line.split(" ", 2);
            if (parts.length < 2) {
                System.out.println("Invalid command. Please try again.");
                continue;
            }

            var usrCommand = parts[0];
            var argument = parts[1];

            Command command = CommandFactory.create(usrCommand, argument);
            command.execute();
        }

        scanner.close();
        System.out.println("Program closed.");

    }
}