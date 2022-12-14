import styles from "./styles";
import {WithChildren} from "../../../types";
import {getClasses} from "../../Display/types";

const classes = getClasses(styles);

export const Container = ({children}: WithChildren) => {
   return <div className={classes.container}>{children}</div>
}