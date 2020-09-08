import React, { Component, useEffect } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link, Route } from "react-router-dom";
import { CButton } from "@coreui/react";

import RoomDataService from "../../../services/rooms.service";
import PrepareRoom from "../prepare_room/PrepareRoom";

//동기 처리
async function callApi(url, data) {
  const response = await url.joinRoom(data);
  const body = await response;
  return body;
}

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room_num: this.props.room_num,
      room_info: "",

      isEnter : false,
    };
    this.enterRoom = this.enterRoom.bind(this);
    this.moveRoom = this.moveRoom.bind(this);
  }

  enterRoom() {
    var data = {
      room_num: this.state.room_num,
    };

    callApi(RoomDataService, data)
      .then((response) => {
        if (response.data["success"] == false) {
          alert(response.data["message"]);
        } else {
          this.setState({ room_info : response.data });
          console.log(this.state.room_info);
        }
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

      // return(
      //   <Route
      //     path='/base/prepare_room/PrepareRoom'
      //     component={() => <PrepareRoom user_info={this.state.user_info} user_num={this.state.user_num} />} />
      // );
  }

  moveRoom() {
    this.enterRoom();
    this.setState({ isEnter : true });
  }

  render() {
    console.log(this.state.room_num);
    return (
      <TableRow>
        <TableCell>{this.props.room_start}</TableCell>
        <TableCell>{this.props.room_title}</TableCell>
        <TableCell>
          {this.state.isEnter ? 
          <Link
          to={{
            pathname: "/base/prepare_room/PrepareRoom",
            state: {
              room_info: this.state.room_info,
              room_num: this.state.room_num,
            },
          }}
        >
          <CButton color="light" onClick={this.moveRoom}>
            Enter Room
          </CButton>
        </Link>
        : 
        <CButton color="light" onClick={this.moveRoom}>
            Enter Room
        </CButton>
        }
          {/* <Link
            to={{
              pathname: "/base/prepare_room/PrepareRoom",
              state: {
                room_info: this.state.room_info,
                room_num: this.state.room_num,
              },
            }}
          >
            <CButton color="light" onClick={this.moveRoom}>
              Enter Room
            </CButton>
          </Link> */}
        </TableCell>
        <TableCell>
          <CButton color="light">Setting Room</CButton>
        </TableCell>
        <TableCell>
          <CButton color="light">Delete Room</CButton>
        </TableCell>
      </TableRow>
    );
  }
}
export default RoomList;
