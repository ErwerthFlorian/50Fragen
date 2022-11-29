import {WithChildren} from "../../../types";
import styles from "./styles";
import {getClasses} from "../../Display/types";
import {useMemo} from "react";
import {css, cx} from "@emotion/css";

interface HorizontalGrid extends WithChildren {
      spaces: number
}

const gridClasses = getClasses(styles);
export const HorizontalGrid = ({children, spaces}: HorizontalGrid) => {
      const horizontalClasses = useMemo(() => cx(gridClasses.horizontalGrid, css({gridTemplateColumns: `repeat(${spaces}, ${100 / spaces}%)`})), []);
      return <div className={horizontalClasses}>{children}</div>
}