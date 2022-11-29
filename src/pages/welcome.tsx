import {InlineModal} from "../components/Display/Modal/modal";
import {Container} from "../components/Layout/container/container";
import {Form, FormHeader, FormSubmitButton} from "../components/Display/Form/Form";
import {useTheme} from "../themes/useTheme";
import {Header} from "../components/Display/TextDisplays/Header/Header";
import {Paragraph} from "../components/Display/TextDisplays/Paragraph/Paragraph";

const modalText = "Die Spielraum-ID wird benötigt, um Server-Intern die Nutzenden zu den richtigen Räumen hinzuzufügen. Wie bei einem Hotel hat jeder Spielraum eine Nummer, die eine Spielesitzung durchführen. Wenn ein neuer Spielraum geöffnet wird und ein Spieler beitreten möchte, so sucht der Server nach der Spielraum-ID und ordnet den Spieler zu diesem Raum hinzu. Auch die Datenzuweisung funktioniert über diese Spielraum-ID."
export const Welcome = () => {
      const {setTheme} = useTheme();
      return (
            <Container>
                  <button onClick={() => setTheme?.(currentTheme => currentTheme === "dark" ? "light" : "dark")}>Toggle Theme</button>
                  <Header headerStyle={"h1"}>Willkommen bei 50 Fragen</Header>
                  <Paragraph>{<>Auf dieser Internetseite könnt Ihr viele Fragenpakete von den Jungs von Pietsmiet
                        nachspielen.
                        Hierfür müsst Ihr einen Spielraum erstellen oder einem bereits existierenden Spielraum beitreten.
                        Dies funktioniert über eine <InlineModal buttonContent="Spieleraum-ID" modalTitel="Warum brauche ich eine Spielraum-ID?" modalText={modalText}/>, welche beim Erstellen eines
                        Raumes erstellt wird.
                  </>}</Paragraph>
                  <Container>
                        <Form>
                              <FormHeader>Erstelle einen Raum</FormHeader>
                              <FormSubmitButton>Raum erstellen</FormSubmitButton>
                        </Form>

                  </Container>
            </Container>
      );
}