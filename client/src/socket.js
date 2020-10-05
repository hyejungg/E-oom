import io from 'socket.io-client';

const sockets = io(process.env.REACT_APP_SERVER_URL, { autoConnect: true });
//const sockets = io('/', { autoConnect: true });
export default sockets;
