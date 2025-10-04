package commands;

import memento.TextCaretaker;
import memento.TextEditor;

public class CommandFactory {

    public static Command createCommand(String command, String argument, TextCaretaker caretaker, TextEditor textEditor) {
        if (command.equals("escrever")) {
            return new WriteCommand(textEditor, argument, caretaker);
        }

        if (command.equals("desfazer")) {
            return new UndoCommand(caretaker);
        }

        if (command.equals("listar")) {
            return new ListCommand(caretaker);
        }

        return new DefaultCommand();
    }
}
