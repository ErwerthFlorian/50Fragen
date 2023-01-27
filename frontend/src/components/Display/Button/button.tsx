import {getClasses} from "../types";
import styles from "./styles";
import {WithChildren} from "../../../types";
import {useMemo} from "react";
import {css, cx} from "@emotion/css";
import {useTheme, useThemeWithCss} from "../../../themes/useCurrentTheme";
import {TranslatedComponents} from "../../../translation/TranslationConfig";
import {useTranslation} from "../../../translation/useTranslation";


interface Button extends WithChildren {
   onClick: () => void;
   className?: string
}

const classNames = getClasses(styles);

export const Button = ({children, onClick, className}: Button) => {
   const theme = useTheme();
   const classes = useMemo(() => cx(classNames.button, css({
      ":hover": {
         backgroundColor: theme.hoverColor,
      },
      backgroundColor: theme.backgroundColor,
      borderColor: theme.borderColor,
      color: theme.textColor,
   }), className), [theme]);
   return <button className={classes} onClick={onClick}>{children}</button>
}

interface RoomButton extends Button {
   translationComponent: TranslatedComponents,
}

export const RoomButton = ({onClick, translationComponent }: Omit<RoomButton, "children">) => {
   const {themeClasses} = useThemeWithCss();
   const translation = useTranslation(translationComponent);
   const classes = useMemo(() => cx(classNames.roomButton,themeClasses), [themeClasses]);
   return <Button className={classes} onClick={onClick}>{translation}</Button>
}