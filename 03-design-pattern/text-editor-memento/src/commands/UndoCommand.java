package commands;

import memento.TextCaretaker;

public class UndoCommand implements Command {
    private final TextCaretaker caretaker;

    public UndoCommand(TextCaretaker caretaker) {
        this.caretaker = caretaker;
    }
    @Override
    public void execute() {
        caretaker.undo();
    }
}
