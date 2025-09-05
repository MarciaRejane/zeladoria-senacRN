import React, { useState, useEffect } from "react";
import { FlatList, Alert, ActivityIndicator } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { accounts, User } from "../../services/api";
import { Header } from "../../components/Header";
import { Container, FilterButton, FilterText, UserItemContainer, UserRoleText, UsernameText, View } from './styles';
import theme from "../../theme";

type UserListScreenProps = NativeStackScreenProps<RootStackParamList, 'UserList'>;

export function UserListScreen({ navigation }: UserListScreenProps) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'admin' | 'collaborador'>('all');



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await accounts.listUsers();
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Erro ao carregar usuários", error);
        Alert.alert('Erro', 'Não foi possivel carrgar a lista de usuários.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let list = users;
    if (activeFilter === 'admin') {
      list = users.filter(user => user.is_staff || user.is_superuser);
    } else if (activeFilter === 'collaborador') {
      list = users.filter(user => !user.is_staff && !user.is_superuser);
    }
    setFilteredUsers(list);
  }, [activeFilter, users]);


  const renderUsrItem = ({ item }: { item: User }) => (
    <UserItemContainer>
      <UsernameText>{item.username}</UsernameText>
      <UserRoleText>
        {item.is_superuser ? 'Super Admin' : (item.is_staff ? 'Admin' : 'Colaborador')}
      </UserRoleText>
    </UserItemContainer>
  );

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color={theme.COLORS.BLACK} />
      </Container>
    );
  }


  return (
    <Container>


      <View>
        <FilterButton onPress={() => setActiveFilter('all')}>
          <FilterText>Todos</FilterText>
        </FilterButton>

        <FilterButton onPress={() => setActiveFilter('admin')}>
          <FilterText>Admin</FilterText>
        </FilterButton>

        <FilterButton onPress={() => setActiveFilter('collaborador')}>
          <FilterText>Colaborador</FilterText>
        </FilterButton>
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUsrItem}
      />
    </Container>
  )
}

