import React, { useState } from "react";
import { Container, Contant, AdminContainer, AdminText, AdminInputs, ImageUser } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { accounts } from "../../services/api";
import { RootStackParamList } from "../../../App";
import { Input } from "../../components/Inputs";
import { ButtonLogin } from "../../components/ButtonLogin";
import theme from "../../theme";
import { Alert } from "react-native";
import { Switch } from "react-native-gesture-handler";


type CreateUserScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateUser'>;

export function CreateUserScreen({ navigation }: CreateUserScreenProps) {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    const handleCreateUser = async () => {
        if (!username || !password || !confirmPassword) {
            Alert.alert('Erro', 'As senhas estão diferentes');
            return;
        }

        setLoading(true);
        try {
            const userData = { username, email, password, confirm_Password: confirmPassword, is_staff: isAdmin };
            await accounts.create(userData);
            Alert.alert("Sucesso", "Usuario criado com sucesso!");
            navigation.goBack();
        } catch (error: any) {
            console.error(error.response?.data || error.message);
            Alert.alert("Erro", "Não foi possivel criar o usuário. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container theme={theme}>

            <Contant>
                <ImageUser
                    source={require('../../assets/image-usuario.png')}
                />
                <AdminInputs>

                    <Input
                        placeholder="Nome do usuário"
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Input
                        placeholder="Email (Opcional)"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitaliza="none"
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

                <AdminContainer>
                    <AdminText>Usuário Admin?</AdminText>
                    <Switch
                        value={isAdmin}
                        onValueChange={setIsAdmin}
                    />

                    <ButtonLogin
                        title={loading ? "Carregando..." : "Criar Usuário"}
                        onPress={handleCreateUser}
                        disabled={loading}
                    />
                </AdminContainer>
            </Contant>
        </Container>
    );
}