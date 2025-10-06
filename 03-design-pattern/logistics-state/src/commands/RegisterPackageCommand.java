package commands;

import states.PackageContext;

import java.util.Map;

public class RegisterPackageCommand implements  Command {

    @Override
    public void execute(String packageCode, Map<String, PackageContext> packages) {
        if (packages.containsKey(packageCode)) {
            System.out.println("Package with code " + packageCode + " is already registered.");
            return;
        }
        var newPackage = new PackageContext(packageCode);
        packages.put(packageCode, newPackage);
        System.out.println("Package with code " + packageCode + " has been registered.");
    }
}
