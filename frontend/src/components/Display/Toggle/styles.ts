export default {
   toggleWrapper: {
      width: 125,
   },
   toggle: {
      all: "unset",
      border: "1px solid black",
      borderRadius: 30,
      position: "relative",
      width: 50,
      height: 19,
      backgroundColor: "hsl(0, 0%, 0%, 33%)",
      cursor: "pointer",
      "::after": {
         transition: "left 0.2s linear",
         backgroundColor: "hsl(0, 0%, 0%, 100%)",
         content: '""',
         display: "block",
         position: "absolute",
         top: 1,
         width: 15,
         height: 15,
         borderRadius: "100%",
         border: "1px solid black",
      }
   }
} as const;