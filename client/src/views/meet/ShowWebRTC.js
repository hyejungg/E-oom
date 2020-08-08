import React, { Component } from "react";

 // .getUserMedia() 성공시 srcObject로 media Stream 반환 -> video elements로 
 function gotLocalMediaStream() {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
  console.log("비디오 띄우기 성공");
  console.log(localStream);
};

// .getUserMedia() 실패시 error msg log로 출력
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}; 

// 가져올 미디어 지정 (video: true).
const mediaStreamConstraints = {
  video: true,
  audio : true
};

// 비디오 해상도 및 추가 요구 사항 지정
// const hdConstraints = {
//   video: {
//     width: {
//       min: 1280
//     },
//     height: {
//       min: 720
//     }
//   }
// }

// Init media stream.
//getUserMedia() 호출하여 사용자에게 카메라 액세스 권한 요청 -> 성공시 srcObject로 media Stream 반환
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);

// Local stream that will be reproduced on the video.
let localStream;

//변수에 video elements 담기
const localVideo = document.createElement('video');
const mediaStream = new MediaStream();

class ShowWebRTC extends Component{
  render(){
    return(
      <div>
        <video id="localVideo" autoPlay playsInline></video> 
        {/* <video id="remoteVideo" autoPlay playsInline></video> */}

        {/* <div>
          <button id="startButton">Start</button>
          <button id="callButton">Call</button>
          <button id="hangupButton">Hang Up</button>
        </div> */}

        {/* <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script> */}
        <script src="./ShowWebRTC.js"></script>
     </div>
    );
  }
}

export default ShowWebRTC;
