import {Breakpoint, getMaxBreakpoint} from "../../../util/styles/breakpoint";

export default {
      horizontalGrid: {
            ...getMaxBreakpoint(Breakpoint.SMALL, {
                  display: "block",
                  borderRadius: 5,
            }),
            placeItems: "center",
            display: "grid",
      }
}