import React, { Component } from "react";
import { Link } from "react-router-dom"; //****
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CForm,
  CButtonToolbar, //****
} from "@coreui/react";

import RoomDataService from "../../services/rooms.service";

//동기 처리
async function callApi(url, data) {
  const response = await url.leaveRoom(data);
  const body = await response;
  return body;
}

class MeetExit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_num : 29,
      room_msg : '',
    }
    // this.enterRoom = this.enterRoom.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
  }

  leaveRoom() {
    var data = {
      room_num: this.state.room_num,
    };

    callApi(RoomDataService, data)
      .then((response) => {
        this.state.room_msg = response.data;
        console.log(this.state.room_msg);
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
    return (
      <>
        <CRow>
          {/* 회의 종료 화면 */}
          <CCol>
            <CCard>
              <CCardBody>
                {/* 다시참여 button 클릭 시 -> 다시 회의 화면으로 이동
                  메인 화면으로 돌아가기 button 클릭 시 -> 메인으로 이동
              */}
                <CRow>
                  <CCol xs="12" md="2"></CCol> {/* 여백 */}
                  <CCol xs="12" md="8" align="center">
                    <h2>
                      온라인 교육이 <b>종료</b>되었습니다.
                    </h2>
                    <CButtonToolbar justify="center">
                      <Link to="../../meet/MeetScreen">
                        <CButton
                          active
                          tabIndex={-1}
                          className="px-4"
                          color="info"
                        >
                          {" "}
                          다시 참여{" "}
                        </CButton>
                      </Link>
                      {/* <Link to="../dashboard/Dashboard"> */}
                        <CButton
                          active
                          tabIndex={-1}
                          className="px-4"
                          color="info"
                          onClick={this.leaveRoom}
                        >
                          {" "}
                          메인 화면으로 돌아가기{" "}
                        </CButton>
                      {/* </Link> */}
                    </CButtonToolbar>
                    <CButtonToolbar justify="center">
                      <CForm action="" method="post">
                        {/* 사용자 의견 (오디오/비디오 품질) 묻기 */}
                      </CForm>
                    </CButtonToolbar>
                  </CCol>
                  <CCol xs="12" md="2"></CCol>
                  {/* 여백 */}
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default MeetExit;
