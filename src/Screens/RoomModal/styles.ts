import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const ModalContent = styled.View`
  width: 80%;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const FooterButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;
