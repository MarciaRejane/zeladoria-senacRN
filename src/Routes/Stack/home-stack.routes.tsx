import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../Screens/Home";

export type HomeStackParamList = {
  home: undefined;
};
const { Navigator, Screen } = createNativeStackNavigator<HomeStackParamList>();

console.log("Home", Home);

export function HomeStack(){
  return(
    <Navigator 
    screenOptions={{
      headerShown: false
    }}>
      <Screen
        name="home"
        component={Home}
      />
    </Navigator>
  )
}