import React, { useState, useEffect } from "react";
import { Container, ButtonWrapper, ViewWhate, Contant } from "./styles";
import { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";
import { User } from "../../services/api";
import { ButtonHome } from "../../components/ButtonHome";
import { Header } from "../../components/Header";

//Tipagem da tela Home detro da navegação
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

//Combinação das props ( navegação + rota )
interface combineProps extends HomeScreenProps {
  route: HomeScreenRouteProp;
}

export function HomeScreen({ navigation, route }: combineProps) {
  const theme = useTheme();
  const [user, setUser] = useState<User | null>(null);//Estado para armazenar os dados do usuário logado


  useEffect(() => {
    //Função para carregar os dados do usuário
    const loadUserData = async () => {
      let currentUser = route.params?.user;

      //Caso não tenha pela rota, busca no AsyncStorage
      if (!currentUser) {
        const userDataString = await AsyncStorage.getItem("userData");
        if (userDataString) {
          currentUser = JSON.parse(userDataString);
        }
      }

      setUser(currentUser);//Armazena no estado
    };
    loadUserData();
  }, [route.params?.user]);

  //Função para logout, limpa o AsyncStorage e redireciona para login
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.replace("Login");
  };

  //Verifica se o usuário tem permissões de administrador
  const userAdmin = user?.is_staff || user?.is_superuser;

  return (
    <Container theme={theme}>
      <Header title="Home" showBackButton={false} />
      <Contant>
        <ViewWhate>
          <ButtonWrapper>
            <ButtonHome
              icon="meeting-room"
              title="Salas"
              onPress={() => navigation.navigate("Rooms", { user: user as User })}
            />

            <ButtonHome
              icon="person-outline"
              title="Usuário"
              onPress={() => navigation.navigate("Profile")}
            />

            {userAdmin && (
              <ButtonHome
                icon="person-add-alt-1"
                title="Cadastrar Usuário"
                onPress={() => navigation.navigate("CreateUser")}
              />
            )}

            {userAdmin && (
              <ButtonHome
                icon="person-outline"
                title="Usuarios"
                onPress={() => navigation.navigate("UserList")}
              />
            )}
            <ButtonHome icon="logout" title="Sair" onPress={handleLogout} />
          </ButtonWrapper>
        </ViewWhate>
      </Contant>
    </Container>
  );
}
