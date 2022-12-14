import {Breakpoint, getMaxBreakpoint} from "../../../util/styles/breakpoint";

export default {
   modalClose: {
      margin: 5,
      all: "unset",
      display: "flex",
      position: "absolute",
      right: 5,
      top: 5,
   },
   modalCloseIcon: {
      placeSelf: "center",
      backgroundSize: "100% 100%",
      width: 12,
      height: 12,
   },
   dialog: {
      margin: 0,
      position: "absolute",
      top: "50vh",
      left: "50vw",
      transform: "translate(-50%, -50%)",
      borderRadius: 10,
      width: "50vw",
      ...getMaxBreakpoint(Breakpoint.SMALL, {
         width: "90vw",
      }),
      "&::backdrop": {
         background: "rgba(0, 0, 0, 0.5)"
      }
   }
} as const;