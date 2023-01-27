export default {
   wrapper: {
      width: 300,
      heigth: 200,
      margin: "auto",
      position: "relative",
      marginBottom: 50,
   },
   avatar: {
      width: 200,
      height: 200,
      marginInline: "auto",
      borderRadius: "100%",
      border: "solid 5px grey",
      overflow: "hidden",
      cursor: "pointer",
      transition: "filter 0.2s",

      ":hover": {
         filter: "opacity(0.2)"
      }
   },
   paragraphPositioningWrapper: {
      position: "absolute",
      top: 65,
      left: 75,
      fontSize: 20,
      textAlign: "center",
      width: 150,
      pointerEvents: "none",
      userSelect: "none",
      transition: "filter 0.2s",
      fontWeight: "bold",
   },
   avatarWrapper: {
      position: "relative",
      width: 300,
      gap: 10,
      border: "none",
      margin: "auto",
      display: "flex",

      placeContent: "center",
      flexDirection: "row"
   }
} as const;