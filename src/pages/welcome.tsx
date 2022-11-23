import {Button, Form} from "react-bootstrap";
import {InlineModal} from "../components/Display/Modal/modal";
import {Container} from "../components/Layout/container/container";

const modalText = "Die Spielraum-ID wird benötigt, um Server-Intern die Nutzenden zu den richtigen Räumen hinzuzufügen. Wie bei einem Hotel hat jeder Spielraum eine Nummer, die eine Spielesitzung durchführen. Wenn ein neuer Spielraum geöffnet wird und ein Spieler beitreten möchte, so sucht der Server nach der Spielraum-ID und ordnet den Spieler zu diesem Raum hinzu. Auch die Datenzuweisung funktioniert über diese Spielraum-ID."
export const Welcome = () => {
   return (
      <Container className={"my-2"}>
         <h1 className={"h1  text-center"}>Willkommen bei 50 Fragen</h1>
         <p className={"my-5 mx-5"}>Auf dieser Internetseite könnt Ihr viele Fragenpakete von den Jungs von Pietsmiet
            nachspielen.
            Hierfür müsst Ihr einen Spielraum erstellen oder einem bereits existierenden Spielraum beitreten.
            Dies funktioniert über eine <InlineModal buttonContent="Spieleraum-ID" modalTitel="Warum brauche ich eine Spielraum-ID?" modalText={modalText}/>, welche beim Erstellen eines Raumes erstellt wird.
         </p>
         <Container className={"py-2 text-center bg-dark w-75"}>
            <h4>Erstelle einen Raum</h4>
            <Form className={"px-5 w-50 m-auto"}>
               <Form.Group controlId={"createRoom"}>
                  <Form.Label>Gib deinen Namen ein:</Form.Label>
                  <Form.Control type={"text"}></Form.Control>
                  <Button type={"submit"} className={"my-4"}>Raum erstellen!</Button>
               </Form.Group>
            </Form>

         </Container>
      </Container>
   );
}