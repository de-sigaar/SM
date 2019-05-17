import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import BarcodeScreen from "../screens/BarcodeScreen";

// Create the App stack with options
export default (Navigation = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: HomeScreen },
      Barcode: { screen: BarcodeScreen }
    },
    {
      defaultNavigationOptions: {
        header: null
      },
      initialRouteName: "Home" // Change this if you want to directly go to a screen you are developing
    }
  )
));
