import {useEffect, useState} from "react";
import {socket} from "../../socket/socket";
import {Player} from "../../components/Player/Player";
//players.map((player) => <Player key={player.name} name={player.name} avatar={player.avatar}/>)
export const GameRoom = () => {
   const {players} = usePlayers();
   return <>
      <div>Frage</div>
      <div>Background</div>
      <Player name={"Flo"} avatar={"blob:http://faadfs"}/>
   </>
}

const usePlayers = () => {
   const [players, setPlayers] = useState<Player[]>([]);

   useEffect(() => {
      socket.on("joinedRoom", (playerName, roomNumber, avatar) => {
         const newPlayers = [...players];
         const player: Player = {name: playerName, avatar};
         if (!newPlayers.includes(player)) {
            newPlayers.push(player);
         }
         setPlayers(newPlayers);
      })
   }, [players])

   return {players}
}