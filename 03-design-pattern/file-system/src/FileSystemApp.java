import components.*;
import java.util.Scanner;
import java.util.Stack;

public class FileSystemApp {
    private static Scanner scanner = new Scanner(System.in);
    private static Folder root = new Folder("root");
    private static Folder currentFolder = root;
    private static Stack<Folder> folderStack = new Stack<>();
    
    public static void main(String[] args) {
        System.out.println("=== Sistema de Arquivos Simples ===");
        System.out.println("Comandos disponíveis:");
        System.out.println("- criar arquivo <nome>");
        System.out.println("- criar pasta <nome>");
        System.out.println("- entrar <nome>");
        System.out.println("- voltar");
        System.out.println("- listar");
        System.out.println("- sair");
        System.out.println();
        
        while (true) {
            System.out.print(getCurrentPath() + "> ");
            String input = scanner.nextLine().trim();
            
            if (input.toLowerCase().equals("sair")) {
                System.out.println("Encerrando o sistema de arquivos...");
                break;
            }
            
            processCommand(input);
        }
        
        scanner.close();
    }
    
    private static void processCommand(String input) {
        String[] parts = input.split(" ", 3);
        String command = parts[0].toLowerCase();
        
        switch (command) {
            case "criar":
                if (parts.length < 3) {
                    System.out.println("Uso: criar <arquivo|pasta> <nome>");
                    return;
                }
                String type = parts[1].toLowerCase();
                String name = parts[2];
                createItem(type, name);
                break;
                
            case "entrar":
                if (parts.length < 2) {
                    System.out.println("Uso: entrar <nome_da_pasta>");
                    return;
                }
                enterFolder(parts[1]);
                break;
                
            case "voltar":
                goBack();
                break;
                
            case "listar":
                listContents();
                break;
                
            default:
                System.out.println("Comando inválido. Use: criar, entrar, voltar, listar ou sair");
        }
    }
    
    private static void createItem(String type, String name) {
        if (currentFolder.getChild(name) != null) {
            System.out.println("Erro: Item com nome '" + name + "' já existe!");
            return;
        }
        
        switch (type) {
            case "arquivo":
                currentFolder.add(new File(name));
                System.out.println("Arquivo '" + name + "' criado com sucesso!");
                break;
                
            case "pasta":
                currentFolder.add(new Folder(name));
                System.out.println("Pasta '" + name + "' criada com sucesso!");
                break;
                
            default:
                System.out.println("Tipo inválido. Use: arquivo ou pasta");
        }
    }
    
    private static void enterFolder(String folderName) {
        FileSystemComponent child = currentFolder.getChild(folderName);
        
        if (child == null) {
            System.out.println("Erro: Pasta '" + folderName + "' não encontrada!");
            return;
        }
        
        if (!(child instanceof Folder)) {
            System.out.println("Erro: '" + folderName + "' não é uma pasta!");
            return;
        }
        
        folderStack.push(currentFolder);
        currentFolder = (Folder) child;
        System.out.println("Entrando na pasta '" + folderName + "'");
    }
    
    private static void goBack() {
        if (folderStack.isEmpty()) {
            System.out.println("Já está na pasta raiz!");
            return;
        }
        
        currentFolder = folderStack.pop();
        System.out.println("Voltando para a pasta anterior");
    }
    
    private static void listContents() {
        if (currentFolder.isEmpty()) {
            System.out.println("Pasta vazia");
        } else {
            System.out.println("Conteúdo da pasta '" + currentFolder.getName() + "':");
            currentFolder.display("");
        }
    }
    
    private static String getCurrentPath() {
        if (folderStack.isEmpty()) {
            return "/" + currentFolder.getName();
        }
        
        StringBuilder path = new StringBuilder();
        Stack<Folder> tempStack = new Stack<>();
        tempStack.addAll(folderStack);
        tempStack.push(currentFolder);
        
        while (!tempStack.isEmpty()) {
            Folder folder = tempStack.remove(0);
            path.append("/").append(folder.getName());
        }
        
        return path.toString();
    }
}