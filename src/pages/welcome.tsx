import {Container} from "../components/Layout/container/container";
import {useTheme} from "../themes/useTheme";
import {MainHeader} from "../components/Display/TextDisplays/Header/Header";
import {HorizontalGrid} from "../components/Layout/Grids/HorizontalGrid";
import {Avatar} from "../components/Display/Avatar/Avatar";
import {RoomButton} from "../components/Display/Button/button";
import {useTranslationSetter} from "../translation/useTranslation";

export const Welcome = () => {
   const {setTheme} = useTheme();
   const {setLanguage} = useTranslationSetter();
   return (
      <Container>
         <button onClick={() => setTheme?.(currentTheme => currentTheme === "dark" ? "light" : "dark")}>Toggle Theme</button>
         <button onClick={() => setLanguage?.(currentLanguage => currentLanguage === "de" ? "en" : "de")}>Toggle Language</button>
         <MainHeader headerStyle={"h1"} />
         <Avatar />
         <HorizontalGrid spaces={2}>
            <RoomButton translationComponent={"CreateRoomButton"} onClick={() => {}} ></RoomButton>
            <RoomButton translationComponent={"JoinRoomButton"} onClick={() => {}} ></RoomButton>
         </HorizontalGrid>
      </Container>
   );
}