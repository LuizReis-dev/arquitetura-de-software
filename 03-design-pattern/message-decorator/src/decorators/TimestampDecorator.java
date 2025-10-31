package decorators;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class TimestampDecorator extends MessageDecorator {
    
    public TimestampDecorator(Message message) {
        super(message);
    }
    
    @Override
    public String getContent() {
        LocalTime now = LocalTime.now();
        String timestamp = now.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
        return "[" + timestamp + "] " + message.getContent();
    }
}