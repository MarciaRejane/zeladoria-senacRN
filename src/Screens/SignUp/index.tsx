import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Inputs';
import { ButtonLogin } from '../../components/ButtonLogin';

import { Container, Title, BackToLoginButton, BackToLoginText } from './styles';

export function SignUp() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Cadastro</Title>
      
      <Input placeholder="Nome" />
      <Input placeholder="Sobrenome" />
      <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
      <Input placeholder="Senha" secureTextEntry />
      <Input placeholder="Confirmar Senha" secureTextEntry />

      <ButtonLogin title="Cadastrar-se" style={{ marginTop: 24 }} />

      <BackToLoginButton onPress={() => navigation.goBack()}>
        <BackToLoginText>Já tenho uma conta</BackToLoginText>
      </BackToLoginButton>
    </Container>
  );
}