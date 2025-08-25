import theme from "../../theme";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  margin-bottom: 10%;
`;

export const Inputs = styled.TextInput`
  width: 307px;
  height: 58px;
  padding: 12px 15px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.DARK_BLUE};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: 16px;
`;