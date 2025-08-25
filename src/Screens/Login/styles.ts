import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const Contant = styled.View`
  align-items: center;
`;

export const ViewGray = styled.View`
  width: 100%;
  height: 270;
  background-color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 25%;
  margin-bottom: 10%;
`;

export const ViewWhate = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
 
`;

export const ImagemSenac = styled.Image`
  width: 200px;
  height: 200%;
  
`

export const TitleLogin = styled.Text`
  margin-bottom: 15%;
  color: ${({theme}) => theme.COLORS.DARK_BLUE};
  font-size: 32px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};

`