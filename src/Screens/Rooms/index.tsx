import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../Routes/app.routes';
import { Header } from '../../components/Header';
import { RoomCard } from '../../components/RoomCard';

import { Container, Content, FilterContainer, FilterButton, FilterText } from './styles';

const DUMMY_ROOMS = [
  { id: '1', title: 'Sala 01, Auditório Principal', description: 'Andar térreo', status: 'Limpa' as const },
  { id: '2', title: 'Sala 02, Laboratório I', description: 'Longa duração', status: 'Pendente' as const },
  { id: '3', title: 'Sala 03, Biblioteca', description: 'Andar superior', status: 'Limpa' as const },
];

type RoomsNavigationProp = NativeStackNavigationProp<AppStackParamList>;

export function Rooms() {
  const [activeFilter, setActiveFilter] = useState<'Geral' | 'Limpas' | 'Pendentes'>('Geral');
  const navigation = useNavigation<RoomsNavigationProp>();

  const filteredRooms = DUMMY_ROOMS.filter(room => {
    if (activeFilter === 'Geral') return true;
    if (activeFilter === 'Limpas') return room.status === 'Limpa';
    return room.status === 'Pendente';
  });

  function handleOpenRoomDetails(roomId: string) {
    navigation.navigate('roomDetails', { roomId });
  }

  return (
    <Container>
      <Header title="Salas" />
      <Content>
        <FilterContainer>
          <FilterButton isActive={activeFilter === 'Geral'} onPress={() => setActiveFilter('Geral')}>
            <FilterText isActive={activeFilter === 'Geral'}>Geral</FilterText>
          </FilterButton>
          <FilterButton isActive={activeFilter === 'Limpas'} onPress={() => setActiveFilter('Limpas')}>
            <FilterText isActive={activeFilter === 'Limpas'}>Limpas</FilterText>
          </FilterButton>
          <FilterButton isActive={activeFilter === 'Pendentes'} onPress={() => setActiveFilter('Pendentes')}>
            <FilterText isActive={activeFilter === 'Pendentes'}>Pendentes</FilterText>
          </FilterButton>
        </FilterContainer>

        <FlatList 
          data={filteredRooms}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RoomCard 
              title={item.title}
              description={item.description}
              status={item.status}
              onPress={() => handleOpenRoomDetails(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}
