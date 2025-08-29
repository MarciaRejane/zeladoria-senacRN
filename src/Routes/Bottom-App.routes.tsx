import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeStack } from "./Stack/home-stack.routes";
import { Rooms} from "../Screens/Rooms";
import { Profile } from "../Screens/Profile";;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { House, Books, User } from "phosphor-react-native";

import { Home } from "../Screens/Home";
import { RoomDetails } from "../Screens/RoomDetails";




export type BottomAppParamList = {
  homeStack: undefined;
  classroom: undefined;
  profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomAppParamList>();


console.log("HomeStack", HomeStack);
console.log("Rooms", Rooms);
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
        component={Rooms}
      />

      {/* <Screen
        name="profile"
        component={Profile}
      /> */}

    </Navigator>
  );
}


// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useTheme } from "styled-components/native";
// import { House, Books, User } from "phosphor-react-native";

// // Importe suas telas
// import { Home } from "../Screens/Home";
// import { Rooms } from "../Screens/Rooms";
// import { Profile } from "../Screens/Profile";
// import { RoomDetails } from "../Screens/RoomDetails";

// // Defina a tipagem das rotas, se necessário para a tela "rooms"
// export type AppRoutesParamList = {
//   home: undefined;
//   rooms: undefined;
//   profile: undefined;
// };

// const { Navigator, Screen } = createBottomTabNavigator<AppRoutesParamList>();

// export function BottomAppRoutes() {
//   const theme = useTheme();

//   return (
//     <Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: theme.COLORS.DARK_BLUE,
//         tabBarInactiveTintColor: theme.COLORS.WHITE,
//         tabBarStyle: {
//           backgroundColor: theme.COLORS.WHITE,
//           height: 70,
//           paddingBottom: 10,
//         },
//       }}
//     >
//       <Screen
//         name="home"
//         component={Home} // Onde sua tela de "rooms" deve ser renderizada
//         options={{
//           tabBarIcon: ({ color }) => (
//             <House size={28} color={color} weight="fill" />
//           ),
//         }}
//       />

//       <Screen
//         name="rooms"
//         component={Rooms}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Books size={28} color={color} weight="fill" />
//           ),
//         }}
//       />

//       <Screen
//         name="profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <User size={28} color={color} weight="fill" />
//           ),
//         }}
//       />
//     </Navigator>
//   );
// }