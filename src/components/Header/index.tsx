import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, BackButton, ButtonIcon } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { BellIcon, CaretLeft, CaretLeftIcon } from 'phosphor-react-native';
import theme from '../../theme';

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  title: string;
  showBackButton?: boolean;

}

export function Header({ title, showBackButton }: Props) {
  const navigation = useNavigation<AppNavigationProp>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <Container>
        {showBackButton && (
          <BackButton onPress={handleGoBack}>
            <CaretLeftIcon size={32} color="#d9d9d9" />
          </BackButton>
        )}
        <Title>{title}</Title>

        <ButtonIcon
          onPress={() => navigation.navigate('Notification')}
        >
          <BellIcon size={24} color={theme.COLORS.MIDNIGHT_BLUE} />
        </ButtonIcon>
      </Container>
    </SafeAreaView>
  );
}