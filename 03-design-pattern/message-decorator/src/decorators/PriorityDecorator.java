package decorators;

public class PriorityDecorator extends MessageDecorator {
    
    public PriorityDecorator(Message message) {
        super(message);
    }
    
    @Override
    public String getContent() {
        return "[PRIORIDADE] " + message.getContent();
    }
}