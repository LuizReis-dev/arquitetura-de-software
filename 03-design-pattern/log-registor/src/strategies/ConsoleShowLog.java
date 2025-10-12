package strategies;

import java.util.List;

public class ConsoleShowLog implements ShowLog {

    @Override
    public void showLog(List<String> logs) {
        System.out.println("--- Logs ---");
        logs.forEach(System.out::println);
    }
}
