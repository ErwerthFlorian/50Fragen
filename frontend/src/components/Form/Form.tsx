import {WithChildren} from "../../../types";
import styles from "./styles";
import {getClasses} from "../types";

const cssClasses = getClasses(styles);

export const Form = ({children}: WithChildren) => {
   return <form className={cssClasses.form}>
      {children}
   </form>
}


export const FormHeader = ({children}: WithChildren) => {
   return <h2 className={cssClasses.header}>{children}</h2>
}

export const FormSubmitButton = ({children}: WithChildren) => {
   return <button className={cssClasses.button} type={"submit"}>{children}</button>
}