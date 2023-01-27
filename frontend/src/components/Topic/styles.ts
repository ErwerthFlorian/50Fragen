export default {
   wrapper: {
      padding: 20,
      backgroundColor: "rgb(200, 200, 200)", borderRadius: 10,
      width: 300,
      height: 200,
      ":hover": {
         backgroundColor: "rgb(220,220,220)",
      }
   },
   header: {
      textAlign: "center",
      margin: 0,
   }
} as const;