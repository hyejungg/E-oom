// import React, { useRef, useEffect, useState } from "react";
// import io from "socket.io-client";
// import Peer from "simple-peer";
// import styled from "styled-components";

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   height: 100vh;
//   width: 90%;
//   margin: auto;
//   flex-wrap: wrap;
// `;

// const StyledVideo = styled.video`
//   height: 40%;
//   width: 50%;
// `;

// const Video = (props) => {
//     const ref = useRef();

//     useEffect(() => {
//         props.peer.on("stream", (stream) => {
//             ref.current.srcObject = stream;
//         });
//     }, []);

//     return (
//         <StyledVideo playsInline autoPlay ref={ref} />
//     );
// };

// const videoConstraints = {
//     height: window.innerHeight / 2,
//     width: window.innerWidth / 2,
// };

// const Room = (props) => {
//     const [peers, setPeers] = useState([]);
//     const userVideo = useRef();
//     //const partnerVideo = useRef();
//     const peersRef = useRef([]);
//     const socketRef = useRef();
//     //const otherUser = useRef();
//     const userStream = useRef();
//     const senders = useRef([]);
//     const roomID = props.match.params.roomID;

//     useEffect(() => {
//         socketRef.current = io.connect("/");
//         navigator.mediaDevices.getUserMedia({ audio: true, video: videoConstraints })
//             .then(stream => {
//                 userVideo.current.srcObject = stream;
//                 socketRef.current.emit("join room", roomID);
//                 console.log("10");
//                 socketRef.current.on("all users", (users) => {
//                     const peers = [];
//                     users.forEach((userID) => {
//                         const peer = createPeer(userID, socketRef.current.id, stream);
//                         peersRef.current.push({
//                             peerID: userID,
//                             peer,
//                         });
//                         peers.push(peer);
//                     });
//                     setPeers(peers);
//                 });

//                 socketRef.current.on("user joined", (payload) => {
//                     const peer = addPeer(payload.signal, payload.callerID, stream);
//                     peersRef.current.push({
//                         peerID: payload.callerID,
//                         peer,
//                     });

//                     setPeers((users) => [...users, peer]);
//                     console.log("20");
//                 });

//                 socketRef.current.on("receiving returned signal", (payload) => {
//                     const item = peersRef.current.find((p) => p.peerID === payload.id);
//                     item.peer.signal(payload.signal);
//                 });
//             });
//     }, []);

//     function createPeer(userToSignal, callerID, stream) {
//         const peer = new Peer({
//             initiator: true,
//             trickle: false,
//             stream,
//         });
//         peer.on("signal", (signal) => {
//             socketRef.current.emit("sending signal", {
//                 userToSignal,
//                 callerID,
//                 signal,
//             });
//         });
//         return peer;
//     }
//     function addPeer(incomingSignal, callerID, stream) {
//         const peer = new Peer({
//             initiator: false,
//             trickle: false,
//             stream,
//         });

//         peer.on("signal", (signal) => {
//             socketRef.current.emit("returning signal", { signal, callerID });
//         });

//         peer.signal(incomingSignal);

//         return peer;
//     }

//     function shareScreen() {
//         navigator.mediaDevices.getDisplayMedia({ video: videoConstraints, audio: true, cursor: true }).then(stream => {
//             const screenTrack = stream.getTracks()[0];
//             senders.current.find(sender => sender.track.kind === 'video').replaceTrack(screenTrack);
//             screenTrack.onended = function () {
//                 senders.current.find(sender => sender.track.kind === "video").replaceTrack(userVideo.current.srcObject.getTracks()[1]);
//             }
//         })
//     }
//     return (
//         <Container>
//             <StyledVideo muted ref={userVideo} autoPlay playsInline />
//             {peers.map((peer, index) => {
//                 return <Video key={index} peer={peer} />;
//             })}
//             <button onClick={shareScreen}>Share screen</button>
//         </Container>
//     );
// };

// export default Room;
