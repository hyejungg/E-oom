import io from 'socket.io-client';
const sockets = io('http://localhost:8080', { autoConnect: true });
// const sockets = io('/', { autoConnect: true });
export default sockets;
