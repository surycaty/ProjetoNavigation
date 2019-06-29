import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./pages/home";
import Product from "./pages/product";

const MainNavigator = createStackNavigator (
    {
        Home,
        Product
    }, 
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"

    }
    }
);

const Routes = createAppContainer(MainNavigator);

export default Routes;