// src/Routes/auth.routes.tsx

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Login } from '../Screens/Login';
import { SignUp } from '../Screens/SignUp'; 


export type AuthRoutesParamList = {
  login: undefined;
  signup: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesParamList>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesParamList>();

export function AuthRoutes() {
  return (

    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="signup" component={SignUp} />
    </Navigator>
  );
}