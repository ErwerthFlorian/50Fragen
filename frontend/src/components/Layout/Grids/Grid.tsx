import {useMemo} from "react";
import {css, cx} from "@emotion/css";
import styles from "./styles";
import {getClasses} from "../../Display/types";
import {WithChildren} from "../../../types";

const gridClasses = getClasses(styles);

interface Grid extends WithChildren {
   horizontalSpaces: number;
   verticalSpaces: number;
   extraStyles?: string;
}

export const Grid = ({horizontalSpaces, verticalSpaces, children, extraStyles}: Grid) => {
   const gridClass = useMemo(() => cx(gridClasses.grid,
      css({gridTemplateColumns: `repeat(${horizontalSpaces}, ${100 / horizontalSpaces}%)`,
         gridTemplateRows: `repeat(${verticalSpaces}, ${100 / verticalSpaces}%)`}), extraStyles), [horizontalSpaces, verticalSpaces]);
   return <div className={gridClass}>{children}</div>
}