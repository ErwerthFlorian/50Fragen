import {WithChildren} from "../../../types";
import styles from "./styles";
import {getClasses} from "../types";
import {cx} from "@emotion/css";
import {useThemeWithCss} from "../../../themes/useCurrentTheme";
import {useMemo} from "react";

const formClass = getClasses(styles);

export const Form = ({children}: WithChildren) => {
   const {themeClasses} = useThemeWithCss("Form");
   const formClasses = useMemo(() => cx(formClass.form, themeClasses), [themeClasses]);
   return <form className={formClasses}>
      {children}
   </form>
}


export const FormHeader = ({children}: WithChildren) => {
   return <h2 className={formClass.header}>{children}</h2>
}

export const FormSubmitButton = ({children}: WithChildren) => {
   return <button className={formClass.button} type={"submit"}>{children}</button>
}