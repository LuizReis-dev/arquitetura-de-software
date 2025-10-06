package commands;

import states.PackageContext;

import java.util.Map;

public interface Command {
    void execute(String packageCode, Map<String, PackageContext> packages);
}
