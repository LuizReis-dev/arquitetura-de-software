package states;

public class DeliveredState extends PackageState {

    public DeliveredState(PackageContext packageContext) {
        super(packageContext);
    }

    @Override
    public void updateState() {
//        System.out.println("The package has already been delivered. No further state changes possible.");
    }

    @Override
    public String getStateName() {
        return "Delivered";
    }
}
