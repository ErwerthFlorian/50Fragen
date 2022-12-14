export default {
   button: {
      all: "unset",
      cursor: "pointer",
      padding: 2,
      borderRadius: 5,
      fontSize: 15,
   },
   roomButton: {
      all: "unset",
      cursor: "pointer",
      padding: 10,
      height: 30,
      width: 250,
      lineHeight: "2em",
      backgroundColor: "grey",
      borderRadius: 5,
      fontSize: 15,
      textAlign: "center",
      position: "relative",

      ":hover": {
         backgroundColor: "hsl(0, 0%, 45%)",
      },

      "::after": {
         content: '""',
         display:"block",
         zIndex: -1,
         position: "relative",
         left: -10,
         width: 270,
         height: 13,
         borderRadius: 9,
         backgroundColor: "black",
      }
   }
} as const;