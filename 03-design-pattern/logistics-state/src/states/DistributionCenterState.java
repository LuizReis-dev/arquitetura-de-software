package states;

public class DistributionCenterState extends PackageState {

    public DistributionCenterState(PackageContext packageContext) {
        super(packageContext);
    }

    @Override
    public void updateState() {
//        System.out.println("Package is at the distribution center. Preparing for delivery...");
        packageContext.setState(new DeliveredState(this.packageContext));
    }

    @Override
    public String getStateName() {
        return "Distribution Center";
    }
}
