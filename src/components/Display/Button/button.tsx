import {getClasses} from "../types";
import styles from "./styles";
import {WithChildren} from "../../../types";
import {useMemo} from "react";
import {cx} from "@emotion/css";
import {useThemeWithCss} from "../../../themes/useTheme";


interface Button extends WithChildren {
   onClick: () => void;
   className?: string
}

const classNames = getClasses(styles);

export const Button = ({children, onClick, className}: Button) => {
   const {themeClasses} = useThemeWithCss("Button");

   const classes = useMemo(() => cx(classNames.button, className, themeClasses), [themeClasses]);
   return <button className={classes} onClick={onClick}>{children}</button>
}