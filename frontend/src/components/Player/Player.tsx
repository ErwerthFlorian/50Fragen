import {AvatarURL} from "../Avatar/Avatar";
import {getClasses} from "../types";
import styles from "./styles";
import {KeyboardEvent, useEffect} from "react";
import {socket} from "../../socket/socket";

export interface Player {
   name: string,
   avatar: AvatarURL | undefined,
}

const cssClasses = getClasses(styles);
const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
   console.log("submit buzzered");
   if (e.key === "Return" || e.key === " ") {
      socket.emit(("playerBuzzered"));
   }
}
export const Player = ({name, avatar}: Player) => {
   useEffect(() => {
      return () => {
         socket.on("communicateBuzzered", (socketId) => {
            if (socketId === socket.id) {
               console.log("if have buzzered");
            }
         })
      };
   }, []);


   return (
      <div className={cssClasses.player} onKeyDown={handleKeyDown}>
         <div className={cssClasses.pointsWrapper}>
            0 punkte
         </div>
         <input type="text" className={cssClasses.text}/>
         <div className={cssClasses.name}>{name}</div>
      </div>
   );
}