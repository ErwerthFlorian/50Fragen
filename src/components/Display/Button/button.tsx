import {getClasses} from "../types";
import styles from "./styles";
import {WithChildren} from "../../../types";
import {useMemo} from "react";
import {cx} from "@emotion/css";
import {useThemeWithCss} from "../../../themes/useTheme";
import {TranslatedComponents} from "../../../translation/TranslationConfig";
import {useTranslation} from "../../../translation/useTranslation";


interface Button extends WithChildren {
   onClick: () => void;
   className?: string
}

const classNames = getClasses(styles);

export const Button = ({children, onClick, className}: Button) => {
   const {themeClasses} = useThemeWithCss("Button");
   const classes = useMemo(() => cx(classNames.button, themeClasses, className), [themeClasses]);
   return <button className={classes} onClick={onClick}>{children}</button>
}

interface RoomButton extends Button {
   translationComponent: TranslatedComponents,
}

export const RoomButton = ({onClick, translationComponent }: Omit<RoomButton, "children">) => {
   const {themeClasses} = useThemeWithCss("RoomButton");
   const translation = useTranslation(translationComponent);
   const classes = useMemo(() => cx(classNames.roomButton,themeClasses), [themeClasses]);
   return <Button className={classes} onClick={onClick}>{translation}</Button>
}