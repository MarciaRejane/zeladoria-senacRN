import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { BottomApp } from "././Bottom-App.routes";
import { useTheme } from "styled-components/native";


console.log("BottomApp", BottomApp);
export function Routes() {
  
  const themeNavigation = DefaultTheme;
  return(
    <NavigationContainer theme={themeNavigation}>
      <BottomApp />
    </NavigationContainer>
  )
};