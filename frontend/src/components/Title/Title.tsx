import React from "react";
import styles from "./styles";
import {useTranslation} from "../../translation/useTranslation";
import {getClasses} from "../types";

const cssClasses = getClasses(styles);

export const Title = () => {
   const translation = useTranslation("MainHeader");
   return <h2 className={cssClasses.header}>{translation}</h2>
}