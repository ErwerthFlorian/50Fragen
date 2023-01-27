import {getClasses} from "../types";
import styles from "./styles";
import {WithChildren} from "../../../types";
import {TranslatedComponents} from "../../../translation/TranslationConfig";
import {useTranslation} from "../../../translation/useTranslation";


interface Button extends WithChildren {
   onClick: () => void;
   className?: string
}

const classNames = getClasses(styles);

export const Button = ({children, onClick, className}: Button) => {
   return <button className={classNames.button} onClick={onClick}>{children}</button>
}

interface RoomButton extends Button {
   translationComponent: TranslatedComponents,
}

export const RoomButton = ({onClick, translationComponent }: Omit<RoomButton, "children">) => {
   const translation = useTranslation(translationComponent);
   return <Button className={classNames.roomButton} onClick={onClick}>{translation}</Button>
}