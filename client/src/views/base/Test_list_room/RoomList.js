import React, { Component, useEffect } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import { CButton } from "@coreui/react";

import RoomDataService from "../../../services/rooms.service";
import authHeader from "../../../services/auth-header";

import MeetParticipate from "../../meet/MeetParticipate";

let response;
let body;

//동기 처리
async function callApi(url, data, whatIs){
  if (whatIs) {
    response = await url.joinRoom(data);
    body = await response;
  } else {
    response = await url.leaverRoom(data);
    body = await response;
  }
  // const response = await url.joinRoom(data);
  // const response = await url.leaverRoom(data);
  // const body = await response;
  return body;
}

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room_num: this.props.room_num,
      room_info: "",
    };
    this.enterRoom = this.enterRoom.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
  }

  enterRoom() {
    var whatIs = true;
    var data = {
      room_num: this.state.room_num,
    };

    // callApi(RoomDataService, data)
    //   .then((response) => {
    //     responseData = response.data;
    //     console.log(responseData);
    //   })
    //   .catch((error) => {
    //     const resMessage =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //     console.log(resMessage);
    //   });

    callApi(RoomDataService, data, whatIs)
      .then((response) => {
        this.state.user_info = response.data;
        console.log(this.state.user_info);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      });

    return (
      <Link to="../meet/MeetParticipate" style={{ textdecoration: "none" }}>
        <MeetParticipate user_info={this.state.user_info} />
      </Link>
    );
  }
  leaveRoom() {
    var whatIs = false;
    var data = {
      room_num: this.state.room_num,
    };

    callApi(RoomDataService, data, whatIs)
      .then((response) => {
        this.state.user_info = response.data;
        console.log(this.state.user_info);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      });
  }

  render() {
    console.log(this.state.room_num);
    return (
      // <Link to="../meet/MeetParticipate">
      //   <TableRow onClick={enterRoom}>
      //     <TableCell>{this.props.room_start}</TableCell>
      //     <TableCell>{this.props.room_title}</TableCell>
      //   </TableRow>
      // </Link>
      <div>
        <TableRow selected={false}>
          <TableCell>{this.props.room_start}</TableCell>

          <TableCell>{this.props.room_title}</TableCell>

          <TableCell align="center">
            {/* <Link to="../meet/MeetParticipate" > */}
            <CButton color="light" onClick={this.enterRoom}>
              강의 입장
            </CButton>
            {/* </Link> */}
          </TableCell>
        </TableRow>
        <TableRow>
          <CButton color="info" onClick={this.leaveRoom}>
            테스트용(leave)
          </CButton>
        </TableRow>
      </div>
    );
  }
}
export default RoomList;
