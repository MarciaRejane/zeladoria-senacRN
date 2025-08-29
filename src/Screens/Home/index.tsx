import React, { useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Container, AnimatedHeader, Logo, ButtonWrapper, ViewWhate } from "./styles";
import { ButtonHome } from "../../components/ButtonHome";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_HEADER_HEIGHT = 350;
const MIN_HEADER_HEIGHT = 100;

export function Home() {
    const theme = useTheme();
    const scrollY = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation<any>();

    const headerHeight = scrollY.interpolate({
        inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
        outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
        extrapolate: "clamp",
    });

    const borderRadius = scrollY.interpolate({
        inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
        outputRange: [50, 0],
        extrapolate: "clamp",
    });

    return (
        <Container>
            <AnimatedHeader
                style={{
                    height: headerHeight,
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    backgroundColor: theme.COLORS.MIDNIGHT_BLUE,
                }}
            >
                <Logo source={require('../../assets/Logo-zeladoria-senac.png')} />
            </AnimatedHeader>

            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: MAX_HEADER_HEIGHT, paddingHorizontal: 10 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
              <ViewWhate>

                <ButtonWrapper>
                    <ButtonHome
                        icon="meeting-room"
                        title="Salas"
                        onPress={() => navigation.navigate("rooms")}
                    />
                    <ButtonHome
                        icon="person-outline"
                        title="Usuário"
                        onPress={() => navigation.navigate("profile")}
                        />
                </ButtonWrapper>
                        </ViewWhate>
            </Animated.ScrollView>
        </Container>
    );
}
