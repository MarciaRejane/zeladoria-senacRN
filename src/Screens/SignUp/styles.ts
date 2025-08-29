import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  margin-bottom: 32px;
`;

export const BackToLoginButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const BackToLoginText = styled.Text`
  color: ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;