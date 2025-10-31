package decorators;

public class UppercaseDecorator extends MessageDecorator {
    
    public UppercaseDecorator(Message message) {
        super(message);
    }
    
    @Override
    public String getContent() {
        return message.getContent().toUpperCase();
    }
}