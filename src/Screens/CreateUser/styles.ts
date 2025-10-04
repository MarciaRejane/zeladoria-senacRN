import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

interface RoleButtonProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Contant = styled.View`
  margin-top: 20px;
  border-radius: 20px;
  justify-content: center;
  width: 100%;
  height: 80%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  font-size: 30px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 20%;
  font-weight: 600;
`;

export const AdminInputs = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

export const RoleSelector = styled.View`
  flex-direction: row;
  border-radius: 15px;
  width: 83%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.ICE_BLUE};
  margin-bottom: 20px;
  padding: 1px;
`;

export const RoleButton = styled(TouchableOpacity)<RoleButtonProps>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.DARK_BLUE : "transparent"};
  border-radius: 15px;
  padding: 10px;
  margin: 0 5px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RoleText = styled.Text<RoleButtonProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.WHITE : theme.COLORS.BLACK};
  font-size: 14px;
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.MEDIUM};
  text-align: center;
`;
