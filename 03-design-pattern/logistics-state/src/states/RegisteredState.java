package states;

public class RegisteredState extends PackageState{

    public RegisteredState(PackageContext packageContext) {
        super(packageContext);
    }

    @Override
    public void updateState() {
//        System.out.println("Package is registered. Moving to in transit state...");
        this.packageContext.setState(new InTransitState(this.packageContext));
    }

    @Override
    public String getStateName() {
        return "Registered";
    }
}
