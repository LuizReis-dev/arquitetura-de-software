import commands.Command;
import commands.CommandFactory;
import states.PackageContext;

import java.util.Map;
import java.util.Scanner;

//Uma empresa de logística precisa de um aplicativo de console para acompanhar pacotes enviados por clientes. O sistema deve permitir registrar pacotes e consultar seu status atual.
//
//        Funcionalidades:
//
//O usuário pode digitar "registrar <codigo>" para registrar um novo pacote.
//Cada pacote começa no estado “registrado”.
//O usuário pode digitar "status <codigo> "para consultar o estado atual do pacote.
//O programa roda em loop até o usuário digitar sair.
//
//Regras de mudança automática de estado:
//
//O sistema deve simular a evolução dos pacotes a cada iteração do loop principal (como se fosse o passar do tempo). Sempre que o usuário digitar um comando, antes de executar a ação, o sistema atualiza todos os pacotes seguindo as regras abaixo:
//Registrado → Em trânsito
//Assim que o sistema atualizar pela primeira vez, o pacote sai do estado inicial “registrado” e passa para “em trânsito”.
//Em trânsito → Centro de distribuição
//Após 2 atualizações no estado “em trânsito”, o pacote é movido para “no centro de distribuição”.
//Centro de distribuição → Entregue
//Após 1 atualização no estado “no centro de distribuição”, o pacote muda para “entregue”
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line;
        Map<String, PackageContext> packages = new java.util.HashMap<>();
        System.out.println("=== Mini Text Editor ===");
        System.out.println("Available commands:");
        System.out.println(" - register <code>  → register a new package");
        System.out.println(" - status <code>    → remove the last written line");
        System.out.println(" - exit             → close the program");
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
            var packageCode = parts[1];

            Command command = CommandFactory.getCommand(usrCommand);

            command.execute(packageCode, packages);

            for (var pkg : packages.values()) {
                pkg.getState().updateState();
            }
        }

        scanner.close();
        System.out.println("Program closed.");

    }
}