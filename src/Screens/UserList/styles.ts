import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const FilterButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
`;

export const FilterText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const UserItemContainer = styled.View`
  padding: 15px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const UsernameText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const UserRoleText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  margin-top: 5px;
`;

export const View = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
