import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import theme from './src/theme';
import {Routes} from "./src/Routes"
import  {Loading } from '@components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold })

  return (
    <SafeAreaProvider>
      
      <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
    </ThemeProvider>
      </SafeAreaProvider>
  );
}
