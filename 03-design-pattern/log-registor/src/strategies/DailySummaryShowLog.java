package strategies;

import java.util.List;

public class DailySummaryShowLog implements ShowLog {
    @Override
    public void showLog(List<String> logs) {
        System.out.println("--- Daily Summary ---");
        System.out.println("Total logs: " + logs.size());
        System.out.println("Logs:");
        logs.forEach(System.out::println);
    }
}
