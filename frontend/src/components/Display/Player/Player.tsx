import {AvatarURL} from "../Avatar/Avatar";

export interface Player {
   name: string,
   avatar: AvatarURL | undefined,
}
export const Player = ({name, avatar}: Player) => {
   return (
   <>
      {name}{avatar}
   </>
   );
}