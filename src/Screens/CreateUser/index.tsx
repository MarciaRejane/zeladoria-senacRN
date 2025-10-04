import React, { useState } from "react";
import { Container, Contant, Title, AdminInputs, RoleSelector, RoleButton, RoleText } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { accounts, CreateUserData } from "../../services/api";
import { RootStackParamList } from "../../../App";
import { Input } from "../../components/Inputs";
import { ButtonLogin } from "../../components/ButtonLogin";
import theme from "../../theme";
import { Alert } from "react-native";
import { ViewGray } from "../Login/styles";

type CreateUserScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateUser'>;
//Tipos de função dos usuários
type UserRole = 'colaborador' | 'zeladoria' | 'superadmin';

export function CreateUserScreen({ navigation }: CreateUserScreenProps) {
    //Estado para armazenar os valores do formulário
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState<'colaborador' | 'zeladoria' | 'superadmin'>('colaborador');
    const [loading, setLoading] = useState(false);


    //Função para criar usuário
    const handleCreateUser = async () => {
        //Verificação de campos obrigatórios
        if (!username || !password || !confirmPassword || !email) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        };

        //Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            Alert.alert("As senhas não coicidem.");
            return;
        }

        //Verifica o tamanho da senha
        if (password.length < 8) {
            Alert.alert("Erro de Senha", "A senha deve ter pelo menos 8 caracteres.");
            return;
        }
        setLoading(true);

        //Definição de permissões e grupos conforme o papel escolhido
        let groups: number[] = [];
        let is_superuser = false;
        let is_staff = false;

        switch (role) {
            case 'zeladoria':
                groups = [1]; //grupo da zeladoria
                is_staff = true;
                break;
            case 'colaborador':
                groups = [2]; //grupo do colaborador
                is_staff = false;
                break;
            case 'superadmin':
                is_superuser = true;
                is_staff = true;
                break;
        }

        //Objeto com os dados para criação do usuário
        const userData: CreateUserData = { username, email, password, confirm_password: confirmPassword, groups: is_superuser ? [] : groups, is_superuser: is_superuser, is_staff: is_staff };

        try {
            //Chama á API para criar o usuário
            await accounts.create(userData);
            Alert.alert("Sucesso", "Usuário criado com sucesso!");
            navigation.goBack();
        } catch (error: any) {
            console.error("Erro ao criar usuário:", error.response?.data || error);
            if (error.response && error.response.data) {
                const errorData = error.response.data;

                //Mapeia os erros recebidos da API e monta uma mensagem mais legível
                const messages = Object.keys(errorData).map(key => {
                    const value = errorData[key];
                    if (Array.isArray(value)) {
                        return `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value.join(' / ')}`;
                    }
                    return `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
                });
                const finalErrorMessage = messages.join('\n\n');
                Alert.alert('Erro no Cadastro', finalErrorMessage || "Verifique os dados e tente novamente.");
            } else {
                Alert.alert("Erro", "Não foi possível conectar ao servidor. Verifique sua rede.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container theme={theme}>
            <Contant>
                <ViewGray>
                    <Title>Cadastro usuários</Title>
                </ViewGray>

                <AdminInputs>
                    <Input
                        placeholder="Nome do usuário"
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Input
                        placeholder="Email "
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Input
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Input
                        placeholder="Confirmar senha"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </AdminInputs>


                <RoleSelector>
                    <RoleButton
                        isActive={role === 'colaborador'}
                        onPress={() => setRole('colaborador')}
                    >
                        <RoleText isActive={role === 'colaborador'}>Colaborador</RoleText>
                    </RoleButton>

                    <RoleButton
                        isActive={role === 'zeladoria'}
                        onPress={() => setRole('zeladoria')}
                    >
                        <RoleText isActive={role === 'zeladoria'}>Zeladoria</RoleText>
                    </RoleButton>

                    <RoleButton
                        isActive={role === 'superadmin'}
                        onPress={() => setRole('superadmin')}
                    >
                        <RoleText isActive={role === 'superadmin'}>Admin</RoleText>
                    </RoleButton>
                </RoleSelector>
                <ButtonLogin
                    title="Criar Usuário"
                    onPress={handleCreateUser}
                />
            </Contant>
        </Container>
    );
}

