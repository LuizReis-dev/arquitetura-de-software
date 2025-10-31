public class BasicMessage implements Message {
    private String content;
    
    public BasicMessage(String content) {
        this.content = content;
    }
    
    @Override
    public String getContent() {
        return content;
    }
}