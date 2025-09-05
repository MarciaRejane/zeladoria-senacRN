import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './src/theme';
import { LoginScreen } from './src/Screens/Login';
import { HomeScreen } from './src/Screens/Home';
import { RoomsScreen } from './src/Screens/Rooms';
import { Profile } from './src/Screens/Profile';
import { CreateUserScreen } from './src/Screens/CreateUser';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { User } from './src/services/api';
import { UserListScreen } from './src/Screens/UserList';
import { CleanRoomModal } from './src/Screens/RoomModal';
import { CreateRoomScreen } from './src/Screens/CreateRoom';

export type RootStackParamList = {
  Login: undefined;
  Home: { user: User };
  Rooms: { user: User };
  CleanRoomModal: { salaId: number };
  Profile: undefined;
  CreateUser: undefined;
  UserList: undefined;
  CreateRoomScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState<keyof RootStackParamList>('Login');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          setInitialRouteName('Home');
        } else {
          setInitialRouteName('Login');
        }
      } catch (error) {
        console.error("Erro ao verificar status de login:", error);
        setInitialRouteName('Login');
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-vindo!', headerShown: false }} />
            <Stack.Screen name="Rooms" component={RoomsScreen} options={{ title: 'Salas', }} />
            <Stack.Screen name="CleanRoomModal" component={CleanRoomModal} options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{ title: 'Criar Usuário' }} />
            <Stack.Screen name="UserList" component={UserListScreen} />
            <Stack.Screen name="CreateRoomScreen" component={CreateRoomScreen} options={{ title: 'Criar Sala' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}