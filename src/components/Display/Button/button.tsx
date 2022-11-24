import {getClasses} from "../types";
import styles from "./styles";
import {WithChildren} from "../../../types";
import {useMemo} from "react";
import {cx} from "@emotion/css";
import {useTheme} from "../../../themes/useTheme";


interface Button extends WithChildren {
   onClick: () => void;
   className?: string
}

const classNames = getClasses(styles);

export const Button = ({children, onClick, className}: Button) => {
   const {theme} = useTheme();
   const classes = useMemo(() => cx(theme.color, theme.backgroundColor, classNames.button, className), [theme]);
   return <button className={classes} onClick={onClick}>{children}</button>
}