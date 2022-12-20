import {useEffect, useState} from "react";
import {Player} from "../components/Display/Player/Player";
import {socket} from "../socket/socket";

export const GameRoom = () => {
   const {players} = usePlayers();
   return <>
      {players.map((player) => <Player key={player.name} name={player.name} avatar={player.avatar}/>)}
      <div>Frage</div>
      <div>Background</div>
   </>
}

const usePlayers = () => {
   const [players, setPlayers] = useState<Player[]>([]);

   useEffect(() => {
      socket.on("joinedRoom", (player: Player) => {
         const newPlayers = [...players];
         if(!newPlayers.includes(player)) {
            newPlayers.push(player);
         }
         setPlayers(newPlayers);
      })
   }, [players])

   return {players}
}