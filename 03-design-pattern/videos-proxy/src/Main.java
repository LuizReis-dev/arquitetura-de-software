import commands.Command;
import commands.CommandFactory;

import java.util.Scanner;

//Uma plataforma de ensino quer um programa em console que gerencie o acesso a vídeos educativos. Nem todos os usuários têm permissão para assistir a todos os vídeos.
//
//Funcionalidades:
//
//O usuário digita "entrar <usuario>" para se logar.
//O usuário digita "assistir <video>" para assistir a um vídeo.
//Cada vídeo tem um nível de acesso: gratuito ou premium.
//Usuários normais só podem acessar vídeos gratuitos. Usuários premium podem acessar todos os vídeos.
//O programa deve rodar em loop até o usuário digitar sair.
//
//        Regras do Proxy:
//
//Quando o usuário tenta assistir a um vídeo, o Proxy verifica a permissão antes de criar/abrir o vídeo real.
//O vídeo real só é carregado se o usuário tiver acesso
//O Proxy deve imprimir mensagens indicando se o acesso foi permitido ou negado./
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line;
//        Map<String, PackageContext> packages = new java.util.HashMap<>();
        System.out.println("=== Watch Videos ===");
        System.out.println("Available commands:");
        System.out.println(" - enter <user>     → login as user (options: 'normal' or 'premium')");
        System.out.println(" - watch <video>    → video to watch (options: 'video' or 'premium_video')");
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
            var argument = parts[1];

            Command command = CommandFactory.getCommand(usrCommand, argument);
            command.execute();
        }

        scanner.close();
        System.out.println("Program closed.");

    }
}