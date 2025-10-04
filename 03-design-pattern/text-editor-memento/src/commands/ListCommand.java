package commands;

import memento.TextCaretaker;

public class ListCommand implements Command {
    private final TextCaretaker caretaker;
    public ListCommand(TextCaretaker caretaker) {
        this.caretaker = caretaker;
    }
    @Override
    public void execute() {
        caretaker.showHistory();
    }
}
