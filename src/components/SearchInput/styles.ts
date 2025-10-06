import theme from "../../theme";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 5%;
`;

export const Inputs = styled.TextInput`
  width: 358px;
  height: 45px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  padding-left: 40px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  left: 10px;
  top: 20%;
`;
