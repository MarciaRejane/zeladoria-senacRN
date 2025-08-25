import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BottomAppParamList} from "../../Routes/Bottom-App.routes";
import { HeaderContainer, BackButton, BackIcon, ScreenName } from "./styles";

type HeaderNavigationProps = NavigationProp<BottomAppParamList>;

type Props = {
    title: string;
    height?: number,
    backgroundColor?: string,
    backButton?: boolean;
   
}
export function Header({ title, backButton = false}: Props) {
    const navigation = useNavigation<HeaderNavigationProps>();

    function handleGoBack() {
        if (navigation.canGoBack()) navigation.goBack();
    }
    return(
        <HeaderContainer>
            {backButton && navigation.canGoBack() && (
                <BackButton onPress={handleGoBack}>
                    <BackIcon/>
                </BackButton>
            )
            }
            <ScreenName>{title}</ScreenName>
        </HeaderContainer>
    )
}

