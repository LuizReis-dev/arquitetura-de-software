package commands;

import states.PackageContext;

import java.util.Map;

public class CheckStatusCommand implements Command {
    @Override
    public void execute(String packageCode, Map<String, PackageContext> packages) {
        if (!packages.containsKey(packageCode)) {
            System.out.println("Package with code " + packageCode + " is not registered.");
            return;
        }
        var pkg = packages.get(packageCode);
        System.out.println("Package " + packageCode + " is currently in state: " + pkg.getState().getStateName());
    }
}
