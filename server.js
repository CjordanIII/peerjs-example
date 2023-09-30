const { expressPeerServer } = require("peer");
const express = require("express");
require("dotenv").config();
const jsxEngine = require("jsx-view-engine");
const cors = require("cors");
const { PeerServer } = require("peer");

//*Environment variables
const app = express();
const PORT = process.env.PORT || 3000;
const socketPort = process.env.PORT || 3001
//web socket
server = require('http').Server(app)
const io = require('socket.io')(server)

//*App Config
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//*Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
// app.use('/peerjs',PeerServer)




//*Routes
app.use("/", require("./routes/api-routes"));






app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
server.listen(socketPort, () => {
  console.log(`webSocket custom server running on ${socketPort}`);
});