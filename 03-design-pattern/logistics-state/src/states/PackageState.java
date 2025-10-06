package states;

public abstract class PackageState {
    protected PackageContext packageContext;

    public PackageState(PackageContext packageContext) {
        this.packageContext = packageContext;
    }

    public abstract void updateState();
    public abstract String getStateName();
}