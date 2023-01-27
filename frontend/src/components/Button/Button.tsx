import {getClasses} from "../types";
import styles from "./styles";
import {useMemo} from "react";
import {cx} from "@emotion/css";
import {WithChildren} from "../../types";
import {TranslatedComponents} from "../../translation/TranslationConfig";
import {useTranslation} from "../../translation/useTranslation";


interface Button extends WithChildren {
   onClick: () => void;
   className?: string
}

const cssClasses = getClasses(styles);

export const Button = ({children, onClick, className}: Button) => {

   const buttonClasses = useMemo(() => cx(cssClasses.button, className), [className]);

   return <button className={buttonClasses} onClick={onClick}>{children}</button>
}

interface RoomButton extends Button {
   translationComponent: TranslatedComponents,
}

export const RoomButton = ({onClick, translationComponent}: Omit<RoomButton, "children">) => {
   const translation = useTranslation(translationComponent);
   return <Button className={cssClasses.roomButton} onClick={onClick}>{translation}</Button>
}