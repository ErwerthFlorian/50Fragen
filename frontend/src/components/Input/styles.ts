
export const shiftLabel = () => {
   return {
      "> label":{
         fontSize: 10,
         top: 0,
      }
   }
}

export default {
   label: {
      transition: "top 0.2s, font-size 0.2s",
      color: "grey",
      marginLeft: 3,
      top: ".75em",
      left: ".25em",
      userSelect: "none",
      pointerEvents: "none",
      position: "absolute",
   },
   input: {
      borderRadius: 5,
      boxShadow: "none",
      outline: "none",
      border: "1px solid black",
      height: "3em",
      paddingInline: 5,
   },
   inputWrapper: {

      display: "grid",
      marginBlock: 10,
      position: "relative",
      ':focus-within, :hover, input:not(:placeholder-shown)': {
         ...shiftLabel()
      }
   },
} as const
