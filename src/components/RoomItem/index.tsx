import React, { useState } from "react";
import { Container, RoomHeader, RoomName, RoomStatus, DetailsContainer, DetailText, CleanButton, CleanButtonText, DeleteButton, DeleteButtonText } from "./styles";
import { Sala, salas, User } from "../../services/api";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { Alert } from "react-native";

interface RoomItemProps {
    room: Sala;
    user: User;
    onDeleteSuccess: (deleteSalaId: number) => void;
}

export function RoomItem({ room, user, onDeleteSuccess }: RoomItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const isAdmin = user.is_staff || user.is_superuser;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString || dateString.trim() === "") {
            return "N/A";
        }
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return "Data inválida";
            }
            return format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
        } catch (e) {
            console.error("Erro ao formatar data:", e);
            return "Data inválida";
        }
    };

    const handleLimparSalaPress = () => {
        navigation.navigate("CleanRoomModal", {
            salaId: room.id,
        });
    };

    const handleDeletePress = () => {
        Alert.alert(
            "Confirmar Exclusão",
            `Tem certeza que deseja excluir a sala? ${room.nome_numero}?`,
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Exclusão cancelada"),
                    style: "cancel",
                },

                {
                    text: "Excluir",
                    onPress: async () => {
                        try {
                            await salas.delete(room.id);
                            Alert.alert("Sala Excluida.");

                            onDeleteSuccess(room.id);
                        } catch (error) {
                            console.error("Erro ao excluir sala:", error);
                            Alert.alert(
                                "Erro",
                                "Não foi possível excluir a sala. Verifique suas permissões."
                            );
                        }
                    },
                    style: "destructive",
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <Container onPress={toggleExpand}>


            <RoomHeader>
                <RoomName>{room.nome_numero}</RoomName>
                <RoomStatus status={room.status_limpeza}>
                    {room.status_limpeza}
                </RoomStatus>
            </RoomHeader>

            {isExpanded && (
                <DetailsContainer>
                    <DetailText>Última limpeza:</DetailText>
                    <DetailText>
                        • Funcionário: {room.ultima_limpeza_funcionario || "N/A"}
                    </DetailText>
                    <DetailText>
                        • Data/Hora: {formatDate(room.ultima_limpeza_data_hora)}
                    </DetailText>

                    {room.status_limpeza === "Limpeza Pendente" && (
                        <CleanButton onPress={handleLimparSalaPress}>
                            <CleanButtonText>Limpar Sala</CleanButtonText>
                        </CleanButton>
                    )}

                    {isAdmin && (
                        <DeleteButton onPress={handleDeletePress}>
                            <DeleteButtonText>Excluir Sala</DeleteButtonText>
                        </DeleteButton>
                    )}
                </DetailsContainer>
            )}
        </Container>
    );
}
