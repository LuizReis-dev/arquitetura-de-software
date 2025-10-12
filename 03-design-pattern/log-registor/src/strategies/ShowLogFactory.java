package strategies;

import java.util.Map;

public class ShowLogFactory {

    public static ShowLog create(String type) {
        Map<String,ShowLog> map =Map.of(
                "console", new ConsoleShowLog(),
                "summary", new DailySummaryShowLog(),
                "file", new FileShowLog()
        );
        return map.getOrDefault(type, (x) -> System.out.println("Unknown command"));
    }
}
