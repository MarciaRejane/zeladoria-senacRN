import React, { useState, useEffect } from "react";
import { Container, ButtonWrapper, ViewWhate } from "./styles";
import { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";
import { User } from "../../services/api";
import { ButtonHome } from "../../components/ButtonHome";
import { Header } from "../../components/Header";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

interface combineProps extends HomeScreenProps {
  route: HomeScreenRouteProp;
}

export function HomeScreen({ navigation, route }: combineProps) {
  const theme = useTheme();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      let currentUser = route.params?.user;

      if (!currentUser) {
        const userDataString = await AsyncStorage.getItem("userData");
        if (userDataString) {
          currentUser = JSON.parse(userDataString);
        }
      }

      setUser(currentUser);
    };
    loadUserData();
  }, [route.params?.user]);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.replace("Login");
  };

  const userAdmin = user?.is_staff || user?.is_superuser;

  return (
    <Container theme={theme}>
      <Header title="Home" showBackButton={false} />
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

          <ButtonHome icon="logout" title="Sair" onPress={handleLogout} />
          {userAdmin && (
            <ButtonHome
              icon="person-outline"
              title="Usuarios"
              onPress={() => navigation.navigate("UserList")}
            />
          )}
        </ButtonWrapper>
      </ViewWhate>
    </Container>
  );
}
