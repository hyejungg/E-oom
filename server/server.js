
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./app/models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

//200809 추가
//const http = require('http');
const server = app.listen(PORT, function () {
  console.log("server & app listening on " + PORT);
});
const socket = require("socket.io");
const io = socket(server);

// peerconnection
const users = {};
const socketToRoom = {};

io.on('connection', socket => {
  console.log("1");
  socket.on("join room", roomID => {
    if (users[roomID]) {
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

    socket.emit("all users", usersInThisRoom);
  });

  socket.on("sending signal", payload => {
    console.log("2");
    io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });

  });

  socket.on("returning signal", payload => {
    console.log("3");
    io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
  });

  socket.on('disconnect', () => {
    console.log("4");
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];
    if (room) {
      room = room.filter(id => id !== socket.id);
      users[roomID] = room;
    }
  });
});

//

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to E-oom application." });
});

require("./app/routes/user.routes.js")(app);

require("./app/routes/lecture.routes.js")(app);
// set port, listen for requests
// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });


