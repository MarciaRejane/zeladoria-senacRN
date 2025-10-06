import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-size: 23px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 30px;
  top: 30px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 25px;
`;
