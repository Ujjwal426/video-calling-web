import { Server } from "socket.io";

const io = new Server(9000);

io.on("connection", (socket) => {
  console.log("Socket Connected", socket.id);
});
