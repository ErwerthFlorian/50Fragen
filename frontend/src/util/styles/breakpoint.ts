import {CSSObject} from "@emotion/react";

export enum Breakpoint {
   SMALL = "768px",
   MEDIUM = "900px",
   BIG = "1200px",
}


export const getMaxBreakpoint = (breakpoint: Breakpoint, styles: CSSObject) => {
   return{[`@media (max-width: ${breakpoint})`]: {
         ...styles
      }
   };
}

export const getMinBreakpoint = (breakpoint: Breakpoint, styles: CSSObject) => {
   return{[`@media (min-width: ${breakpoint})`]: {
         ...styles
      }
   };
}

export const getMinMaxBreakpoint = (minBreakpoint: Breakpoint, maxBreakpoint: Breakpoint, styles: CSSObject) => {
   return{[`@media (min-width: ${minBreakpoint}) and (max-width: ${maxBreakpoint})`]: {
         ...styles
      }
   };
}