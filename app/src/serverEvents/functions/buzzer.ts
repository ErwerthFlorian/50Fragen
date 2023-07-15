import { socket } from "../../index.tsx";

const buzzerIn = (roomId: string) => socket.emit("buzzer/in", roomId, socket.id);
const buzzerOut = (listener: (buzzerData: string) => void) => socket.on("buzzer/out", listener);

export const BuzzerFunctions = {
    in: buzzerIn,
    out: buzzerOut,
};
