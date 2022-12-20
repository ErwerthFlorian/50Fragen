import {HorizontalGrid} from "../../Layout/Grids/HorizontalGrid";
import {WithChildren} from "../../../types";
import styles from "./styles";
import {getClasses} from "../types";
import {useCallback, useMemo, useState} from "react";
import {css, cx} from "@emotion/css";
import {useTheme} from "../../../themes/useCurrentTheme";

const toggleClasses = getClasses(styles);
interface Toggle extends WithChildren {
   leftValue: string;
   rightValue: string;
   onClick: () => void;
}

export const Toggle = ({leftValue, rightValue, onClick}: Toggle) => {
   const [toggled, setToggled] = useState(false);
   const theme = useTheme();
   const handleClick = useCallback(() => {
      onClick();
      setToggled(currentlyToggled => !currentlyToggled);
   }, [])

   const toggleClass = useMemo(() => cx(css({
      color: theme.textColor
   }),toggleClasses.toggle, css({"::after": {left: toggled ? 32 : 1}})), [toggled, theme]);
   return <div className={toggleClasses.toggleWrapper}>
      <HorizontalGrid spaces={3}>
         <div>{leftValue}</div>
         <button onClick={handleClick} className={toggleClass} />
         <div>{rightValue}</div>
      </HorizontalGrid>
   </div>
}