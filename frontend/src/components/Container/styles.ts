import {Breakpoint, getMaxBreakpoint, getMinMaxBreakpoint} from "../../util/styles/breakpoint";

export default {
   container: {
      ...getMaxBreakpoint(Breakpoint.SMALL, {
         margin: 50
      }),
      ...getMinMaxBreakpoint(Breakpoint.SMALL, Breakpoint.MEDIUM, {
         margin: 100,
      }),
      paddingTop: 50,
      marginInline: "25%",
   }
} as const;