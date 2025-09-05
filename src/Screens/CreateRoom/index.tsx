import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { Input } from '../../components/Inputs';
import { ButtonLogin } from '../../components/ButtonLogin';
import { Container, RoomTitle, InputsContainer } from "./styles";
import { salas } from '../../services/api';

type CreateRoomScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateRoomScreen'>;

export function CreateRoomScreen({ navigation }: CreateRoomScreenProps) {
    const [nomeNumero, setNomeNumero] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCreateRoom = async () => {
        if (!nomeNumero || !capacidade || !descricao || !localizacao) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        try {
            const capacidadeAsNumber = parseInt(capacidade, 10);
            if (isNaN(capacidadeAsNumber)) {
                Alert.alert('Erro', 'A capacidade deve ser um número válido.');
                setLoading(false);
                return;
            }

            const data = {
                nome_numero: nomeNumero,
                capacidade: capacidadeAsNumber,
                descricao,
                localizacao,
            };

            await salas.create(data);
            Alert.alert('Sucesso', 'Sala criada com sucesso!');

            navigation.goBack();

        } catch (error) {
            console.error("Erro ao criar sala:", error);
            Alert.alert('Erro', 'Não foi possível criar a sala. Verifique sua conexão e permissões.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>

            <RoomTitle>Criar Nova Sala</RoomTitle>
            <InputsContainer>
                <Input
                    placeholder="Nome/Número da Sala (ex: Sala 101)"
                    value={nomeNumero}
                    onChangeText={setNomeNumero}
                />

                <Input
                    placeholder="Capacidade"
                    value={capacidade}
                    onChangeText={setCapacidade}
                    keyboardType="numeric"
                />

                <Input
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <Input
                    placeholder="Localizalçao"
                    value={localizacao}
                    onChangeText={setLocalizacao}
                />

                <ButtonLogin
                    title={loading ? "Criando..." : "Criar Sala"}
                    onPress={handleCreateRoom}
                    disabled={loading}
                />
            </InputsContainer>

        </Container>
    );
}