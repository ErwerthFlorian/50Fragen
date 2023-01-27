import styles from "./styles";
import {getClasses} from "../types";
import {WithChildren} from "../../types";

const classes = getClasses(styles);

export const Container = ({children}: WithChildren) => {
   return <div className={classes.container}>{children}</div>
}