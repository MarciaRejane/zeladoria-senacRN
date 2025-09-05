import React, { useState, useEffect, useCallback } from "react";
import { Alert, ActivityIndicator, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import {
    Container,
    FilterButton,
    FilterText,
    ViewFilter,
    CreateButton,
    TitleCreate,
    Content,
} from "./styles";
import { salas, Sala } from "../../services/api";
import { RoomItem } from "../../components/RoomItem";
import { useFocusEffect } from "@react-navigation/native";
import theme from "../../theme";

type RoomsScreenProps = NativeStackScreenProps<RootStackParamList, "Rooms">;

export function RoomsScreen({ navigation, route }: RoomsScreenProps) {
    const [loading, setLoading] = useState(true);
    const [salasData, setSalasData] = useState<Sala[]>([]);
    const [filteredSalas, setFilteredSalas] = useState<Sala[]>([]);
    const [activeFilter, setActiveFilter] = useState<"all" | "clean" | "pending">(
        "all"
    );

    const handleSalaDeleted = (deletedSalaId: number) => {
        const updatedSalas = salasData.filter((sala) => sala.id !== deletedSalaId);
        setSalasData(updatedSalas);
    };

    const fetchSalas = async () => {
        setLoading(true);
        try {
            const response = await salas.list();
            setSalasData(response.data);
        } catch (error) {
            console.error("Erro ao carregar salas:", error);
            Alert.alert("Erro", "Não foi possível carregar a lista de salas.");
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchSalas();
        }, [])
    );

    // Atualiza as salas filtradas com base no filtro ativo
    useEffect(() => {
        let list = salasData;
        if (activeFilter === "clean") {
            list = salasData.filter((sala) => sala.status_limpeza === "Limpa");
        } else if (activeFilter === "pending") {
            list = salasData.filter(
                (sala) => sala.status_limpeza === "Limpeza Pendente"
            );
        }
        setFilteredSalas(list);
    }, [activeFilter, salasData]);

    if (loading) {
        return (
            <Container style={{ justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={theme.COLORS.MIDNIGHT_BLUE} />
            </Container>
        );
    }

    const { user } = route.params;
    // Define se o usuário é administrador
    const isAdmin = user?.is_staff || user?.is_superuser;

    return (
        <Container>
            <Content>

                <ViewFilter>
                    <FilterButton isActive={activeFilter === "all"} onPress={() => setActiveFilter("all")}>
                        <FilterText isActive={activeFilter === "all"}>Todas</FilterText>
                    </FilterButton>
                    <FilterButton isActive={activeFilter === "clean"} onPress={() => setActiveFilter("clean")}>
                        <FilterText isActive={activeFilter === "clean"}>
                            Salas Limpas
                        </FilterText>
                    </FilterButton>
                    <FilterButton isActive={activeFilter === "pending"} onPress={() => setActiveFilter("pending")}>
                        <FilterText isActive={activeFilter === "pending"}>
                            Salas Pendentes
                        </FilterText>
                    </FilterButton>
                </ViewFilter>

                {isAdmin && (
                    <CreateButton onPress={() => navigation.navigate("CreateRoomScreen")}>
                        <TitleCreate>Criar Nova Sala</TitleCreate>
                    </CreateButton>
                )}

                <FlatList
                    data={filteredSalas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <RoomItem
                            room={item}
                            user={user}
                            onDeleteSuccess={handleSalaDeleted}
                        />
                    )}
                />
            </Content>
        </Container>
    );
}
