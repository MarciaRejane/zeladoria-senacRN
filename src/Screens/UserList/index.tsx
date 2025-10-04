import React, { useState, useEffect, useCallback } from "react";
import { FlatList, Alert, ActivityIndicator, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { accounts, User } from "../../services/api";
import { Container, Contant, UserItemContainer, UserRoleText, UsernameText, FilterButton, FilterText, FlatListText, NewUserButton, NewUserButtonText, ViewFilter, ViwBlue } from './styles';
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import theme from "../../theme";
//Hook que executa quando a tela entra em foco
import { useFocusEffect } from "@react-navigation/native";
import { PlusCircleIcon } from "phosphor-react-native";

//Tipagem de navegação para essa tela
type UserListScreenProps = NativeStackScreenProps<RootStackParamList, 'UserList'>;

//Tipagem dos filtros de usuário
type UserFilter = 'admin' | 'zeladoria' | 'colaborador';

//Tempo de espera para busca
const SEARCH_DELAY_MS = 500;
//Lista de todos os filtros que tem na tela
const ALL_FILTERS: UserFilter[] = ['admin', 'zeladoria', 'colaborador'];

export function UserListScreen({ navigation }: UserListScreenProps) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<UserFilter>('admin');//filtro ativo

  const renderUserRole = (user: User) => {
    if (user.is_superuser) return 'Super Admin';
    if (user.groups && user.groups.includes(1)) return 'Zeladoria';
    if (user.groups && user.groups.includes(2)) return 'Colaborador';
    if (user.is_staff) return 'Admin (Staff)';
    return 'Colaborador';
  };

  //Debounce para pesquisa, espera o usuário parar de digitar
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, SEARCH_DELAY_MS);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);


  //Chama a API e aplica os filtros de busca e papel
  const fetchUsers = useCallback(async (query: string, currentActiveFilter: UserFilter) => {
    setLoading(true);

    try {
      //chama a API para listar os usuários
      const apiResponse = await accounts.listUsers({ username: query });
      const queryLower = query.toLowerCase();

      const filteredLocally = apiResponse.data.filter(user => {
        const userRole = renderUserRole(user);

        let matchesRole = false;

        if (currentActiveFilter === 'admin') {
          if (userRole === 'Super Admin' || userRole === 'Admin (Staff)') {
            matchesRole = true;
          }
        } else if (currentActiveFilter === 'zeladoria') {

          if (userRole === 'Zeladoria') {
            matchesRole = true;
          }
        } else if (currentActiveFilter === 'colaborador') {

          if (userRole === 'Colaborador') {
            matchesRole = true;
          }
        }

        //Filtro de busca por nome
        const matchesQuery = query === '' || user.username.toLowerCase().includes(queryLower);

        return matchesRole && matchesQuery;
      });

      setUsers(filteredLocally); //Salva os usuários filtrados

    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
      Alert.alert('Erro', 'Não foi possível carregar a lista de usuários.');
    } finally {
      setLoading(false);
    }
  }, []);


  //Chama a API sempre que mudar a busca ou filtro 
  useEffect(() => {
    fetchUsers(debouncedSearchTerm, activeFilter);
  }, [debouncedSearchTerm, activeFilter, fetchUsers]);


  //Recarrega a lista quando a tela entra em foco
  useFocusEffect(
    useCallback(() => {
      fetchUsers(debouncedSearchTerm, activeFilter);
    }, [fetchUsers, debouncedSearchTerm, activeFilter])
  );

  //Atualiza o termo de pesquisa
  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  //Renderiza cada item da lista
  const renderUserItem = ({ item }: { item: User }) => (
    <UserItemContainer
      onPress={() => navigation.navigate('EditUser', { userId: item.id })}
    >
      <UsernameText>{item.username}</UsernameText>
      <UserRoleText>
        {renderUserRole(item)}
      </UserRoleText>
    </UserItemContainer>
  );

  if (loading && users.length === 0) {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.COLORS.BLACK} />
      </Container>
    );
  }

  //Texto do placeholder muda conforme o filtro que esta clicado
  const placeholderText = activeFilter === 'admin'
    ? 'Buscar Usuário em "Admin"'
    : `Buscar Usuário em "${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}"`;

  return (
    <Container>
      <Header
        title="Lista de Usuários"
        showBackButton={true}
      />

      <Contant>

        <SearchInput
          placeholder={placeholderText}
          placeholderTextColor={theme.COLORS.MEDIUM_GRAY}
          onChangeText={handleSearch}
          value={searchTerm}
        />

        <NewUserButton onPress={() => navigation.navigate('CreateUser')}>
          <PlusCircleIcon size={24} color={theme.COLORS.DARK_BLUE} weight="fill" />
          <NewUserButtonText>Novo Usuário</NewUserButtonText>
        </NewUserButton>

        <ViwBlue>
          <ViewFilter>
            {ALL_FILTERS.map((role) => (
              <FilterButton
                key={role}
                isActive={activeFilter === role}
                onPress={() => {
                  setActiveFilter(role);
                  setSearchTerm('');
                }}
              >
                <FilterText isActive={activeFilter === role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </FilterText>
              </FilterButton>
            ))}
          </ViewFilter>

          {loading && users.length > 0 ? (
            <View style={{ padding: 20 }}>
              <ActivityIndicator size="small" color={theme.COLORS.DARK_BLUE} />
            </View>
          ) : (
            <FlatList
              data={users}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderUserItem}
              ListEmptyComponent={() => (
                <FlatListText>
                  Nenhum usuário encontrado na categoria "{activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}".
                </FlatListText>
              )}
            />
          )}
        </ViwBlue>
      </Contant>
    </Container>
  );
}