package decorators;

public abstract class MessageDecorator implements Message {
    protected Message message;
    
    public MessageDecorator(Message message) {
        this.message = message;
    }
    
    @Override
    public String getContent() {
        return message.getContent();
    }
}