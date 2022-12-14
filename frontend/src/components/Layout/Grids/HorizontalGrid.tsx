import {WithChildren} from "../../../types";
import styles from "./styles";
import {getClasses} from "../../Display/types";
import {useMemo} from "react";
import {css, cx} from "@emotion/css";

interface HorizontalGrid extends WithChildren {
      spaces: number
      extraStyles?: string;
}

const gridClasses = getClasses(styles);
export const HorizontalGrid = ({children, spaces, extraStyles}: HorizontalGrid) => {
      const horizontalClasses = useMemo(() => cx(gridClasses.grid, css({gridTemplateColumns: `repeat(${spaces}, ${100 / spaces}%)`}), extraStyles), []);
      return <div className={horizontalClasses}>{children}</div>
}