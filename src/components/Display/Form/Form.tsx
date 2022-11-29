import {WithChildren} from "../../../types";
import styles from "./styles";
import {getClasses} from "../types";
import {cx} from "@emotion/css";
import {useThemeWithCss} from "../../../themes/useTheme";
import {useMemo} from "react";

const formClass = getClasses(styles);

export const Form = ({children}: WithChildren) => {
   const {themeClasses} = useThemeWithCss("Form");
   const formClasses = useMemo(() => cx(formClass.form, themeClasses), [themeClasses]);
   return <form className={formClasses}>
      {children}
   </form>
}

export const FormTextInput = ({label}:{label: string}) => {
   return <div><label>{label}</label><input type={"text"} /></div>
}

export const FormHeader = ({children}: WithChildren) => {
   return <h2 className={formClass.header}>{children}</h2>
}

export const FormSubmitButton = ({children}: WithChildren) => {
   return <button type={"submit"}>{children}</button>
}