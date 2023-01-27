import {getClasses} from "../types";
import styles from "./styles";
import {useMemo} from "react";
import {cx} from "@emotion/css";
import {WithChildren} from "../../types";
import {TranslatedComponents} from "../../translation/TranslationConfig";
import {useTranslation} from "../../translation/useTranslation";


interface Button extends Partial<WithChildren> {
   onClick: () => void;
   className?: string,
   translationComponent?: TranslatedComponents,

}

const cssClasses = getClasses(styles);

export const Button = ({children, onClick, className, translationComponent}: Button) => {
   const buttonClasses = useMemo(() => cx(cssClasses.button, className), [className]);
   return <button className={buttonClasses} onClick={onClick}>{children}</button>
}

export const RoomButton = ({onClick, translationComponent, className, children}: Button) => {
   const translation = useTranslation(translationComponent);
   const buttonClasses = useMemo(() => cx(cssClasses.roomButton, className), [className]);
   return <Button className={buttonClasses} onClick={onClick}>{translation}</Button>
}