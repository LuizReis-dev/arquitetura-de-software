package commands;

import memento.TextCaretaker;
import memento.TextEditor;

public class WriteCommand implements Command {
    private final String argument;
    private final TextCaretaker caretaker;
    private final TextEditor textEditor;

    public WriteCommand(TextEditor textEditor, String argument, TextCaretaker caretaker) {
        this.argument = argument;
        this.caretaker = caretaker;
        this.textEditor = textEditor;
    }

    @Override
    public void execute() {
        textEditor.write(argument);
        caretaker.backup();
    }
}
