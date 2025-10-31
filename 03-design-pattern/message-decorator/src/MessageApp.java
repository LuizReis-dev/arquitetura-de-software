import decorators.*;
import java.util.Scanner;

public class MessageApp {
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("=== Sistema de Mensagens com Decoradores ===");
        System.out.println("Digite 'enviar <mensagem>' para criar uma mensagem");
        System.out.println("Digite 'sair' para encerrar");
        
        while (true) {
            System.out.print("> ");
            String input = scanner.nextLine().trim();
            
            if (input.toLowerCase().equals("sair")) {
                System.out.println("Encerrando o programa...");
                break;
            }
            
            if (input.toLowerCase().startsWith("enviar ")) {
                String messageText = input.substring(7); // Remove "enviar "
                processMessage(messageText);
            } else {
                System.out.println("Comando inválido. Use: enviar <mensagem>");
            }
        }
        
        scanner.close();
    }
    
    private static void processMessage(String text) {
        Message message = new BasicMessage(text);
        
        // Aplicar timestamp?
        System.out.print("Aplicar timestamp? (s/n) ");
        String timestampChoice = scanner.nextLine().trim().toLowerCase();
        if (timestampChoice.equals("s") || timestampChoice.equals("sim")) {
            message = new TimestampDecorator(message);
        }
        
        // Transformar em maiúsculas?
        System.out.print("Transformar em maiúsculas? (s/n) ");
        String uppercaseChoice = scanner.nextLine().trim().toLowerCase();
        if (uppercaseChoice.equals("s") || uppercaseChoice.equals("sim")) {
            message = new UppercaseDecorator(message);
        }
        
        // Adicionar prioridade?
        System.out.print("Adicionar prioridade? (s/n) ");
        String priorityChoice = scanner.nextLine().trim().toLowerCase();
        if (priorityChoice.equals("s") || priorityChoice.equals("sim")) {
            message = new PriorityDecorator(message);
        }
        
        System.out.println("Mensagem final: " + message.getContent());
        System.out.println();
    }
}