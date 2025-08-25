import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Container, ViewGray, ViewWhate, ImagemSenac, TitleLogin, Contant} from "./styles";


import { Input } from "../../components/Inputs";
import { ButtonLogin } from "../../components/ButtonLogin";

export  function Login() {

    function handleLogin() {
  console.log("Email:", email);
  console.log("Senha:", password);

}
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
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
              placeholder="Email"
              placeholderTextColor= {theme.COLORS.DARK_BLUE}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              placeholder="Senha"
              placeholderTextColor= {theme.COLORS.DARK_BLUE}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <ButtonLogin
              title="Entrar"
              onPress={handleLogin}
            />

          </ViewWhate>
                </Contant>    
        </Container>
    );
}