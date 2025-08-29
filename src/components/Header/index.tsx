import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, BackButton, BackIcon } from './styles';

type Props = {
  title: string;
}

export function Header({ title }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}