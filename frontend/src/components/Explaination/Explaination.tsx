import {getClasses} from "../types";
import styles from "./styles";
import {useTranslation} from "../../translation/useTranslation";

const cssClasses = getClasses(styles);
export const Explaination = () => {
   const header = useTranslation("ExplainationHeader");
   const step1 = useTranslation("ExplainationStep1");
   const step2 = useTranslation("ExplainationStep2");
   const step3 = useTranslation("ExplainationStep3");
   const step4 = useTranslation("ExplainationStep3");
   return <div className={cssClasses.wrapper}>
      <h2 className={cssClasses.header}>{header}</h2>
      <ol className={cssClasses.list}>
         <li>{step1}</li>
         <li>{step2}</li>
         <li>{step3}</li>
         <li>{step4}</li>
      </ol>
   </div>
}