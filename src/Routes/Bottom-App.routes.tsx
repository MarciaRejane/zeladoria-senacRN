
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeStack } from "./Stack/home-stack.routes";
import { Classroom } from "../Screens/Classroom";
import { Profile } from "../Screens/Profile";
import { useTheme } from "styled-components/native";

export type BottomAppParamList = {
  homeStack: undefined;
  classroom: undefined;
  profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomAppParamList>();


console.log("HomeStack", HomeStack);
console.log("Classroom", Classroom);
console.log("Profile", Profile);
export function BottomApp() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        
        tabBarStyle:{
          backgroundColor: theme.COLORS.MIDNIGHT_BLUE,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Screen
        name="homeStack"
        component={HomeStack}
      />

      <Screen
        name="classroom"
        component={Classroom}
      />

      <Screen
        name="profile"
        component={Profile}
      />

    </Navigator>
  );
}