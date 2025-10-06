package states;

public class InTransitState extends PackageState {
    public InTransitState(PackageContext packageContext) {
        super(packageContext);
    }

    @Override
    public void updateState() {
//        System.out.println("Package is in transit. Moving to distribution center...");
        this.packageContext.setState(new DistributionCenterState(this.packageContext));
    }

    @Override
    public String getStateName() {
        return "In Transit";
    }
}
