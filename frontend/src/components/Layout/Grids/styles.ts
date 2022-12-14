import {Breakpoint, getMaxBreakpoint} from "../../../util/styles/breakpoint";

export default {
      grid: {
            ...getMaxBreakpoint(Breakpoint.SMALL, {
                  display: "block",
                  borderRadius: 5,
            }),
            placeItems: "flex-end center",
            display: "grid",
      }
}