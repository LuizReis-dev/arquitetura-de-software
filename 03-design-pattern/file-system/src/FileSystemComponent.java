public abstract class FileSystemComponent {
    protected String name;
    
    public FileSystemComponent(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
    
    public abstract void display(String indent);
    
    // Métodos padrão para componentes que não são pastas
    public void add(FileSystemComponent component) {
        throw new UnsupportedOperationException("Operação não suportada");
    }
    
    public void remove(FileSystemComponent component) {
        throw new UnsupportedOperationException("Operação não suportada");
    }
    
    public FileSystemComponent getChild(String name) {
        throw new UnsupportedOperationException("Operação não suportada");
    }
}