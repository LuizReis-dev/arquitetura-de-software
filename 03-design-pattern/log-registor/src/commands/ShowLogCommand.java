package commands;

import strategies.ShowLog;
import strategies.ShowLogFactory;

public class ShowLogCommand implements Command {
    private final String type;

    public ShowLogCommand(String type) {
        this.type = type;
    }

    @Override
    public void execute() {
        ShowLog showStrategy = ShowLogFactory.create(type);
        showStrategy.showLog(singleton.LogSingleton.getInstance().getLogs());
    }
}
