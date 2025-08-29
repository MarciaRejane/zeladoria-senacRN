import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const FilterContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
  border-radius: 8px;
  margin-bottom: 24px;
`;


export const FilterButton = styled.TouchableOpacity<{ isActive: boolean }>`
  flex: 1;
  padding: 17px;
  border-radius: 6px;
  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.MIDNIGHT_BLUE : 'transparent'};
`;

export const FilterText = styled.Text<{ isActive: boolean }>`
  font-family: ${({ theme, isActive }) => isActive ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.BOLD};
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.MIDNIGHT_BLUE};
  text-align: center;
`;