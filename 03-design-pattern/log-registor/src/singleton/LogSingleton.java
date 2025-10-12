package singleton;

import java.util.ArrayList;
import java.util.List;

public class LogSingleton {
    private static LogSingleton instance;
    private final List<String> logs = new ArrayList<>();

    private LogSingleton() {
    }

    public static LogSingleton getInstance() {
        if (instance == null) {
            instance = new LogSingleton();
        }
        return instance;
    }

    public void addLog(String message) {
        logs.add(message);
    }

    public List<String> getLogs() {
        return logs;
    }
}
