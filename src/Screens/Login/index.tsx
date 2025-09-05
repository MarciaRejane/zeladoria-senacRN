import React, { useState } from "react";
import { Container, ViewGray, ViewWhate, ImagemSenac, TitleLogin, Contant } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { accounts, LoginResponse } from "../../services/api";
import { RootStackParamList } from "../../../App";
import theme from "../../theme";
import { ThemeProvider } from "styled-components/native";
import { Input } from "../../components/Inputs";
import { ButtonLogin } from "../../components/ButtonLogin";
import { Alert } from "react-native";


type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await accounts.login(username, password);
      const { token, user_data }: LoginResponse = response.data;

      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userData', JSON.stringify(user_data));

      navigation.replace('Home', { user: user_data });//substitui a tela atual pela home.
    } catch (error) {
      console.error(error);
      Alert.alert('Erro de login', 'Nome de usuário ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>

      <Container>
        <ViewGray>
          <ImagemSenac
            source={require('../../assets/Logo-senac.png')}
          />
        </ViewGray>
        <Contant>
          <ViewWhate>
            <TitleLogin>Login</TitleLogin>
            <Input
              placeholder="Usuário"
              placeholderTextColor={theme.COLORS.DARK_BLUE}
              value={username}
              onChangeText={setUsername}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              placeholder="Senha"
              placeholderTextColor={theme.COLORS.DARK_BLUE}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <ButtonLogin
              title={loading ? "carregando..." : "Entrar"}
              onPress={handleLogin}
            />

          </ViewWhate>
        </Contant>
      </Container>
    </ThemeProvider>
  );
};





