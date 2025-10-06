import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';
import theme from '../../theme';

export function Notification() {
  return (
    <Container>
      <Header
        title='Notificação'
        showBackButton
      />
    </Container>
  );
}