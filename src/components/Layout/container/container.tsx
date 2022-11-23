import "./styles.scss";
import {WithChildren} from "../../../types";

export const Container = ({children}: WithChildren) => {
   return <div className={"container"}>{children}</div>
}