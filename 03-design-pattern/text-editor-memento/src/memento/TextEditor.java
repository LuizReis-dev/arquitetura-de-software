package memento;

public class TextEditor {
    private String line;

    public TextEditor() {
        this.line = "";
    }

    public void write(String text) {
        this.line = text;
    }

    public IMemento save() {
        return new TextMemento(line);
    }

    public void restore(IMemento memento) {
        this.line = memento.getState();
    }
}
