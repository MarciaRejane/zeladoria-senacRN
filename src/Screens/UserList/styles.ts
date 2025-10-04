import styled from "styled-components/native";
import theme from "../../theme";
import { TouchableOpacity, View } from "react-native";

interface FilterButtonProps {
  isActive: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Contant = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;
  flex-direction: column;
`;

export const ViewFilter = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const FilterButton = styled(TouchableOpacity)<FilterButtonProps>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.MIDNIGHT_BLUE : theme.COLORS.LIGHTER_DARK_BLUE};
  border-radius: 10px;
  padding: 20px 23px;
`;

export const FilterText = styled.Text<FilterButtonProps>`
  font-size: 16px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.WHITE : theme.COLORS.MIDNIGHT_BLUE};
`;

export const UserItemContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const UsernameText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLUE};
`;

export const UserRoleText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  margin-top: 5px;
`;

export const FlatListText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  margin-top: 50px;
  text-align: justify;
`;

export const NewUserButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  border-width: 1px;
  margin-bottom: 20px;
  flex-direction: row;
  border-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const NewUserButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const ViwBlue = styled.View`
  background-color: ${({ theme }) => theme.COLORS.ICE_BLUE};
  padding: 10px;
  justify-content: center;
  margin-bottom: 60px;
  /* margin-bottom: 10px; */
  border-radius: 10px;
`;

export const ItemUsers = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;

export const FilterSelector = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;

export const ListWrapper = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;
