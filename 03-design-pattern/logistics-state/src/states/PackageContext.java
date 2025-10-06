package states;

public class PackageContext {
    private String code;
    private PackageState state;

    public PackageContext(String code) {
        this.code = code;
        this.state = new RegisteredState(this);
    }
    public String getCode() {
        return code;
    }

    public PackageState getState() {
        return state;
    }

    public void setState(PackageState state) {
        this.state = state;
    }
}
