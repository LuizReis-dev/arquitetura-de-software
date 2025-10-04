package memento;

import java.util.ArrayList;
import java.util.List;

public class TextCaretaker {
    private final List<IMemento> mementos = new ArrayList<>();
    private final TextEditor textEditor;

    public TextCaretaker(TextEditor textEditor) {
        this.textEditor = textEditor;
    }

    public void backup() {
        mementos.add(textEditor.save());
    }

    public void undo() {
        if (!mementos.isEmpty()) {
            IMemento memento = mementos.removeLast();
            textEditor.restore(memento);
        }
    }

    public void showHistory() {
        for (IMemento memento : mementos) {
            System.out.println(memento.getTimestamp() + " - " + memento.getState());
        }
    }
}
