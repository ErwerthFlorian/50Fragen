import {AvatarURL} from "../Avatar/Avatar";
import {css, cx} from "@emotion/css";
import {getClasses} from "../types";
import styles from "./styles";
import {useThemeWithCss} from "../../../themes/useCurrentTheme";
import {KeyboardEvent, useEffect, useMemo} from "react";
import {HorizontalGrid} from "../../Layout/Grids/HorizontalGrid";
import {socket} from "../../../socket/socket";

export interface Player {
   name: string,
   avatar: AvatarURL | undefined,
}

const cssClasses = getClasses(styles);
const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      console.log("submit buzzered");
   if(e.key === "Return" || e.key === " ") {
      socket.emit(("playerBuzzered"));
   }
}
export const Player = ({name, avatar}: Player) => {
   const {themeClasses} = useThemeWithCss();
   const wrapper = useMemo(() => cx(cssClasses.player, themeClasses), [cssClasses, themeClasses]);

   useEffect(() => {
      return () => {
         socket.on("communicateBuzzered", (socketId) => {
            if(socketId === socket.id) {
               console.log("if have buzzered");
            }
         })
      };
   }, []);


   return (
      <div className={wrapper} onKeyDown={handleKeyDown}>
         <HorizontalGrid extraStyles={css({height:30, width: "50%"})} spaces={2}>
            <div className={cssClasses.points}>0 punkte</div></HorizontalGrid>
         <input type="text" className={cssClasses.text} />
         <div className={cssClasses.name}>{name}</div>
      </div>
   );
}