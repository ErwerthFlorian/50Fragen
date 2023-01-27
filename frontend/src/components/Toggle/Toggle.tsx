import styles from "./styles";
import {getClasses} from "../types";
import {useCallback, useMemo, useState} from "react";
import {css, cx} from "@emotion/css";
import {WithChildren} from "../../types";

const cssClasses = getClasses(styles);

interface Toggle extends WithChildren {
   leftValue: string;
   rightValue: string;
   onClick: () => void;
}

export const Toggle = ({leftValue, rightValue, onClick}: Toggle) => {
   const [toggled, setToggled] = useState(false);
   const handleClick = useCallback(() => {
      onClick();
      setToggled(currentlyToggled => !currentlyToggled);
   }, [])

   const toggleClass = useMemo(() => cx(css({}), cssClasses.toggle, css({"::after": {left: toggled ? 32 : 1}})), [toggled]);
   return <div className={cssClasses.toggleWrapper}>
      <div className={cssClasses.wrapper}>
         <div>{leftValue}</div>
         <button onClick={handleClick} className={toggleClass}/>
         <div>{rightValue}</div>
      </div>
   </div>
}