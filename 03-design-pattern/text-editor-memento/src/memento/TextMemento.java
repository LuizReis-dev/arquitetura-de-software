package memento;

import java.time.LocalDateTime;

public class TextMemento implements IMemento {
    private final String state;
    private final LocalDateTime timestamp;

    public TextMemento(String state) {
        this.state = state;
        this.timestamp = LocalDateTime.now();
    }
    @Override
    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    @Override
    public String getState() {
        return state;
    }
}
