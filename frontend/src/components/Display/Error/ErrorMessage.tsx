import {useTranslation} from "../../../translation/useTranslation";
import {TranslatedComponents} from "../../../translation/TranslationConfig";
import styles from "./styles";
import {getClasses} from "../types";

const errorClasses = getClasses(styles);
type ErrorMessage = {
   hasError: boolean;
   errorComponent: TranslatedComponents;
}
export const ErrorMessage = ({errorComponent, hasError}: ErrorMessage) => {
   const translatedErrorMessage = useTranslation(errorComponent);
   return <>{hasError && <div className={errorClasses.error}>{translatedErrorMessage}</div>}</>
}