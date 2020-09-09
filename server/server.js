
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

let socketList = {};

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('User disconnected!');
  });

  socket.on('BE-check-user', ({ roomId, userName }) => {
    let error = false;

    io.sockets.in(roomId).clients((err, clients) => {
      clients.forEach((client) => {
        if (socketList[client] == userName) {
          error = true;
        }
      });
      socket.emit('FE-error-user-exist', { error });
    });
  });

  /**
   * Join Room
   */
  socket.on('BE-join-room', ({ roomId, userName }) => {
    // Socket Join RoomName
    socket.join(roomId);
    socketList[socket.id] = userName;

    // Set User List
    io.sockets.in(roomId).clients((err, clients) => {
      try {
        const users = [];
        clients.forEach((client) => {
          // if (
          //   client !== socket.id &&
          //   socketList[client] &&
          //   socketList[client] !== userName
          // ) {
          // Add User List
          users.push({ userId: client, userName: socketList[client] });
          //   } else if (client !== socket.id && socketList[client] == userName) {
          //     // Found Same User Name..
          //     socket.leave(roomId);
          //     delete socketList[socket.id];

          //     throw {
          //       msg: 'User Name not available',
          //     };
          //   }
        });
        socket.broadcast.to(roomId).emit('FE-user-join', users);
        // io.sockets.in(roomId).emit('FE-user-join', users);
      } catch (e) {
        io.sockets.in(roomId).emit('FE-error-user-exist', { err: true });
      }
    });
  });

  socket.on('BE-call-user', ({ userToCall, from, signal }) => {
    io.to(userToCall).emit('FE-receive-call', {
      signal,
      from,
    });
  });

  socket.on('BE-accept-call', ({ signal, to }) => {
    io.to(to).emit('FE-call-accepted', {
      signal,
      answerId: socket.id,
    });
  });

  socket.on('BE-send-message', ({ roomId, msg, sender }) => {
    io.sockets.in(roomId).emit('FE-receive-message', { msg, sender });
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

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

require('./app/routes/auth.routes.js')(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/lecture.routes.js")(app);
require("./app/routes/room.routes.js")(app);
require("./app/routes/enrollment.routes.js")(app);
// set port, listen for requests
// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });