export default {
   player: {
      position: "relative",
      display: "flex",outline: "1px solid grey",
      justifyContent: "center",
      height: 100,
      width: 250,
      textAlign: "center",
      borderRadius: 10,
   },
   buzzered: {
     backgroundColor: "red",
   },
   name: {
      position: "absolute",
      bottom: 0,
   },
   text: {
      position: "absolute",
      bottom: 30,
   },
   points: {

   },
   buzzer: {
      backgroundColor: "red",
      width: 10,
      height: 10,
      border: "solid red",
      borderRadius: "100%",
   }
} as const;