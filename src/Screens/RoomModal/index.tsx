import React, { useState } from 'react';
import { Modal, Alert, ActivityIndicator } from 'react-native';
import { Container, ModalContent, Title, Input, Button, ButtonText, FooterButton, FooterText } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { salas } from '../../services/api';
import theme from '../../theme';

type CleanRoomModalProps = NativeStackScreenProps<RootStackParamList, 'CleanRoomModal'>;

export function CleanRoomModal({ navigation, route }: CleanRoomModalProps) {
    const [observacoes, setObservacoes] = useState('');
    const [loading, setLoading] = useState(false);
    const { salaId } = route.params;

    const handleLimparSala = async () => {
        setLoading(true);
        try {
            await salas.clean(salaId, { observacoes });
            Alert.alert('Sucesso', 'A sala foi limpa com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error("Erro ao limpar sala:", error);
            Alert.alert('Erro', 'Não foi possível limpar a sala. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => navigation.goBack()}
        >
            <Container>
                <ModalContent>
                    <Title>Limpar Sala</Title>
                    <Input
                        placeholder="Observações (opcional)"
                        multiline
                        numberOfLines={4}
                        value={observacoes}
                        onChangeText={setObservacoes}
                    />
                    <Button onPress={handleLimparSala} disabled={loading}>
                        {loading ? (
                            <ActivityIndicator color={theme.COLORS.WHITE} />
                        ) : (
                            <ButtonText>Limpar Sala</ButtonText>
                        )}
                    </Button>
                    <FooterButton onPress={() => navigation.goBack()}>
                        <FooterText>Cancelar</FooterText>
                    </FooterButton>
                </ModalContent>
            </Container>
        </Modal>
    );
}