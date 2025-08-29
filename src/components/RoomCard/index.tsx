import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, InfoContainer, Title, Description, Status, StatusText } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  description: string;
  status: 'Limpa' | 'Pendente';
}

export function RoomCard({ title, description, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
      <Status status={status}>
        <StatusText>{status}</StatusText>
      </Status>
    </Container>
  );
}