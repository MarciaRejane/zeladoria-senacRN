import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import React from "react";

import { AppRoutes } from "./app.routes"; 
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { COLORS } = useTheme();
  const userIsLoggedIn = true; 

  const themeNavigation = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: COLORS.MIDNIGHT_BLUE,
      secundary: COLORS.DARK_BLUE,
      background: COLORS.WHITE,
      card: COLORS.DARK_BLUE,
      text: COLORS.WHITE,
      border: 'transparent',
      notification: COLORS.VIBRANT_RED,
    },
  };
  
  return (
    <NavigationContainer theme={themeNavigation}>
      {userIsLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}





// // src/Routes/index.tsx

// import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
// import { useTheme } from "styled-components/native";
// import React from "react";

// // Importe o componente BottomAppRoutes que acabamos de criar
// import { BottomAppRoutes } from "./Bottom-App.routes"; 
// import { AuthRoutes } from './auth.routes';

// export function Routes() {
//   const { COLORS } = useTheme();
  
//   // --- CONTROLE DE LOGIN ---
//   // Mantenha esta variável temporária por enquanto
//   const userIsLoggedIn = true; 

//   const themeNavigation = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: COLORS.DARK_BLUE,
//       background: COLORS.WHITE,
//       card: COLORS.DARK_BLUE,
//       text: COLORS.WHITE,
//       border: 'transparent',
//       notification: COLORS.VIBRANT_RED,
//     },
//   };
  
//   return(
//     <NavigationContainer theme={themeNavigation}>
//       {userIsLoggedIn ? <BottomAppRoutes /> : <AuthRoutes />}
//     </NavigationContainer>
//   );
// }












// // // src/Routes/index.tsx

// // import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
// // import { useTheme } from "styled-components/native";

// // import { BottomApp } from "./Bottom-App.routes";
// // import { AuthRoutes } from './auth.routes'; // Importe as rotas de autenticação
// // import React from "react";

// // export function Routes() {
// //   const { COLORS } = useTheme();

// //   // --- CONTROLE DE LOGIN ---
// //   // Mude para 'true' para ver as telas do app, ou 'false' para ver a tela de login.
// //   const userIsLoggedIn = true; 

// //   const themeNavigation = {
// //     ...DefaultTheme,
// //     colors: {
// //       ...DefaultTheme.colors,
// //       primary: COLORS.DARK_BLUE,
// //       background: COLORS.WHITE,
// //       card: COLORS.DARK_BLUE,
// //       text: COLORS.WHITE,
// //       border: 'transparent',
// //       notification: COLORS.VIBRANT_RED,
// //     },
// //   };
  
// //   return(
// //     <NavigationContainer theme={themeNavigation}>
// //       {/* Aqui está a lógica para decidir qual rota mostrar */}
// //       {userIsLoggedIn ? <BottomAppRoutes.BottomApp /> : <AuthRoutes />}
// //     </NavigationContainer>
// //   );
// // }