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
import { ActivityIndicator, Alert } from "react-native";

//Define os tipos de props da tela de Login usando navegação tipada.
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) {
  //Estados locais para armazezar o usuário e senha digitados
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  //Função responsavel por fazer login.
  const handleLogin = async () => {
    //Verifica se os campos foram preenchidos.
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      //Chama o endpoint passando usuário e senha
      const response = await accounts.login(username, password);
      const { token, user_data }: LoginResponse = response.data;

      // 1. Salva o Token e os Dados do Usuário
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userData', JSON.stringify(user_data));

      // 2. Navega para a tela principal
      navigation.replace('Home', { user: user_data });

    } catch (error: any) {
      console.error("Erro no login:", error.response?.data || error);

      let message = 'Erro ao realizar login. Tente novamente.';

      if (error.response && error.response.status === 400) {
        // Trata o erro de credenciais inválidas 
        if (error.response.data.non_field_errors) {
          message = error.response.data.non_field_errors[0] || 'Credenciais inválidas.';
        } else {
          message = 'Usuário ou senha incorretos.';
        }
      }

      Alert.alert('Falha no Login', message);

    } finally {
      setLoading(false);//Desativa o carregamento
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
        {/*Área com o formulario de login */}
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
              title="Entrar"
              onPress={handleLogin}

            />

          </ViewWhate>
        </Contant>
      </Container>
    </ThemeProvider>
  );
};





