import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { Input } from '../../components/Inputs';
import { ButtonLogin } from '../../components/ButtonLogin';
import { Container, RoomTitle, InputsContainer, Contant } from "./styles";
import { salas } from '../../services/api';
import { Header } from '../../components/Header';

//Tipagem da navegação
type CreateRoomScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateRoomScreen'>;

export function CreateRoomScreen({ navigation }: CreateRoomScreenProps) {
    //Estados para armazenar os valores dos campos do formulário
    const [nomeNumero, setNomeNumero] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [loading, setLoading] = useState(false);

    //Função responsável por criar uma nova sala
    const handleCreateRoom = async () => {
        //Verifica se todos os campos estão preenchidos
        if (!nomeNumero || !capacidade || !descricao || !localizacao) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        try {
            //Converte a capacidade paranúmero e valida
            const capacidadeAsNumber = parseInt(capacidade, 10);
            if (isNaN(capacidadeAsNumber) || capacidadeAsNumber <= 0) {
                Alert.alert('Erro', 'A capacidade deve ser um número válido.');
                setLoading(false);
                return;
            }

            //Monta o corpo da requisição em formato FormData
            const formData = new FormData();
            formData.append('nome_numero', nomeNumero);
            formData.append('capacidade', capacidadeAsNumber.toString());
            formData.append('descricao', descricao);
            formData.append('localizacao', localizacao);
            formData.append('ativa', 'true');

            //Chama o endpoint de criação de sala
            await salas.create(formData);
            Alert.alert('Sucesso', 'Sala criada com sucesso!');

            navigation.goBack();

        } catch (error) {
            console.error("Erro ao criar sala:", error);
            const errorMessage = (error as any)?.response?.data?.detail || 'Não foi possivel criar a sala. Verifique sua conexão e permissões.';
            Alert.alert('Erro', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Header
                title='Criar salas'
                showBackButton
            />
            <Contant>
                <InputsContainer>
                    <RoomTitle>Nome/Número da Sala</RoomTitle>
                    <Input
                        placeholder="Ex: Sala 101"
                        value={nomeNumero}
                        onChangeText={setNomeNumero}
                    />

                    <RoomTitle>Capacidade de pessoas</RoomTitle>
                    <Input
                        placeholder="Ex: 30"
                        value={capacidade}
                        onChangeText={setCapacidade}
                        keyboardType="numeric"
                    />

                    <RoomTitle>Localização</RoomTitle>
                    <Input
                        placeholder="Ex: Bloco A"
                        value={localizacao}
                        onChangeText={setLocalizacao}
                    />

                    <RoomTitle>Descrição</RoomTitle>
                    <Input
                        placeholder="Ex: Possui projetor"
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline
                        numberOfLines={4}
                    />
                    <ButtonLogin
                        title={loading ? "Criando..." : "Criar Sala"}
                        onPress={handleCreateRoom}
                        disabled={loading}
                    />
                </InputsContainer>
            </Contant>
        </Container>
    );
}