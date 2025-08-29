import styled from 'styled-components/native';

interface FilterTextProps {
  isActive: boolean;
}

export const FilterText = styled.Text<FilterTextProps>`
  color: ${({ isActive, theme }) => (isActive ? theme.COLORS.DARK_BLUE : theme.COLORS.GRAY)};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  font-size: 16px;
`;
