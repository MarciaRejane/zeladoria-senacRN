import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { House, ClockCounterClockwise, User } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { NavigatorScreenParams } from '@react-navigation/native';

import { Home } from '../Screens/Home';
import { Rooms } from '../Screens/Rooms';
import { RoomDetails } from '../Screens/RoomDetails';
import { Profile } from '../Screens/Profile';


export type AppStackParamList = {
  home: undefined;
  rooms: undefined;
  roomDetails: { roomId: string };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
   <Stack.Navigator screenOptions={{ headerShown: true, headerShadowVisible:false }}>
  <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
  <Stack.Screen name="rooms" component={Rooms} options={{ title: 'Salas',    headerTitle: () => null, headerShown: false}} />
  <Stack.Screen name="roomDetails" component={RoomDetails} options={{ title: 'Detalhes da Sala', headerShown: false }} />
</Stack.Navigator>
  );
}


type TabRoutes = {
  inicio: NavigatorScreenParams<AppStackParamList>;
  historico: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<TabRoutes>();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: theme.COLORS.WHITE,
        tabBarInactiveTintColor: theme.COLORS.WHITE,
        tabBarStyle: {
          backgroundColor: theme.COLORS.MIDNIGHT_BLUE,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="inicio"
        component={AppStack}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => <House color={color} size={32} />,
        }}
      />

      <Tab.Screen
        name="historico"
        component={Rooms}
        options={{
          tabBarLabel: 'Salas',
          tabBarIcon: ({ color }) => <ClockCounterClockwise color={color} size={32} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('inicio', { screen: 'rooms' });
          },
        })}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <User color={color} size={32} />,
        }}
      />
    </Tab.Navigator>
  );
}
