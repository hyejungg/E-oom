import React, { Component, useEffect } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import RoomDataService from "../../../services/rooms.service"
import authHeader from "../../../services/auth-header";

let room_num;

//동기 처리
async function callApi(url, data) {
  const response = await url.joinRoom(data);
  const body = await response;
  return body;
}

const enterRoom = () => {
    let responseData = [];

    // var data = {room_num};

    callApi(RoomDataService, room_num)
      .then((response) => {
        responseData = response.data;
        console.log(responseData);
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
};

class RoomList extends React.Component {
  render() {
      room_num = this.props.room_num;
      console.log(room_num)
    return (
      <TableRow onClick={enterRoom}>
        <TableCell>{this.props.room_start}</TableCell>
        <TableCell>{this.props.room_title}</TableCell>
      </TableRow>
    );
  }
}
export default RoomList;
