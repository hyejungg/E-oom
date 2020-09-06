import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CLabel,
  CSelect,
} from "@coreui/react";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TestListRoomAdd from "./TestListRoomAdd"
import RoomList from "./RoomList"
import RoomDataService from "../../../services/rooms.service"

//circle progress
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3) * 3,
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 1080,
//   },
//   progress: {
//     margin: theme.spacing(2) * 2,
//   },
// }));

const TestListRoom = () => {
  const {classes} = useState('');
  const [activeTab, setActiveTab] = useState(1);

  const [lecture_title, setLectureTitle] = useState('');
  const [lecture_host, setLectureHost] = useState('')

  const [lectureNum, setLectureNum] = useState('4');
  const [room_info, setRoomInfo] = useState([]);
  const [completed, setCompleted] = useState(0);
  
  useEffect(() => {
    // this.timer = setInterval(progress, 20);
    progress();

    callApi(RoomDataService, lectureNum)
    .then(response =>{
      setRoomInfo(response.data);
    })
    .catch(error => {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      console.log(resMessage);
    })
  }, []);

  //progress
  const progress = () => {
    setCompleted({
      completed: completed >= 100 ? 0 : completed + 1 
    });
  };

  //동기 처리
  async function callApi(url, data){
    const response = await url.getRoomsInfo(data);
    const body = await response;
    return body;
  }
  
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>{lecture_title} / {lecture_host}</CCardHeader>
          {/* <CCardHeader>수업명 / 담당호스트</CCardHeader> */}
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>향후 회의</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>이전 회의</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>개인 회의실</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                {/* <CTabPane className={classes.root}> */}
                  <CRow className="mt-3">
                    <CCol xs="12">
                      <CCard accentColor="success">
                        <CCardHeader align="center">향후 예약된 강의 목록</CCardHeader>
                          <CCardBody>
                            <Table>
                            {/* <Table className={classes.table}> */}
                              <TableHead>
                                <TableRow>
                                  <TableCell>강의 예정일</TableCell>
                                  <TableCell>강의명</TableCell>
                                  <TableCell>강의 입장</TableCell>
                                  <TableCell>강의 설정</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {room_info ? (
                                  room_info.map((c) => {
                                    return (
                                      <RoomList
                                        // stateRefresh={this.stateRefresh}
                                        key={c.room_num}
                                        room_num={c.room_num}
                                        room_start={c.room_start}
                                        room_title={c.room_title}
                                      />
                                    );
                                  })
                                ) : 
                                  // console.log("없음")
                                  <TableRow>
                                    <TableCell colSpan="6" align="center">
                                      <CircularProgress
                                        // className={classes.progress}
                                        variant="determinate"
                                        value={completed}
                                      />
                                    </TableCell>
                                  </TableRow>
                                }
                              </TableBody>
                            </Table>
                          </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="4">
                      <CButton
                        className="mt-2"
                        active={activeTab === 0}
                        tabIndex={-1}
                        color="light"
                        onClick={() => setActiveTab(0)}
                      >
                        {" "}
                        새 강의 예약{" "}
                      </CButton>
                    </CCol>
                    <CCol xs="8">
                      <CTabPane active={activeTab === 0}>
                        <TestListRoomAdd />
                      </CTabPane>
                    </CCol>
                  </CRow>
                </CTabPane>
                <CTabPane>
                  <CRow className="mt-3">
                    <CCol xs="12">
                      <CCard accentColor="success">
                        <CCardHeader align="center">이전 강의 목록</CCardHeader>
                        <CCardBody>
                          <Table>
                            <TableHead>
                              <TableRow>
                                  <TableCell>강의날짜</TableCell>
                                  <TableCell>강의명</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>

                            </TableBody>
                          </Table>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CTabPane>
                <CTabPane>
                  {/* 개인회의실 삭제 */}
                  {/* <CListGroup accent className="mt-3">
                    <CCardHeader>
                      <div className="lectureMenu">개인회의이름</div>
                      <div className="lectureInfo">{"강의 설명~~~~"}</div>
                    </CCardHeader>
                    <CCardHeader>
                      <div className="lectureMenu">개인회의 ID</div>
                      <div className="lectureInfo">{"버튼 식으로 수정!!"}</div>
                    </CCardHeader>
                    <CCardHeader>
                      <div className="lectureMenu">개인회의 PW</div>
                      <div className="lectureInfo">{"버튼 식으로 수정!!"}</div>
                    </CCardHeader>
                    <CCardHeader>
                      <div className="lectureMenu">회의초대링크</div>
                      <div className="lectureInfo">{"이것은 랜덤지정?"}</div>
                    </CCardHeader>
                  </CListGroup>
                  <CRow>
                    <CCol align="right">
                      <CButton
                        className="mt-3"
                        active
                        tabIndex={-1}
                        color="light"
                      >
                        {" "}
                        개인 회의 정보 수정{" "}
                      </CButton>{" "} */}
                      <Link to="/base/meet_create/MeetCreate">
                        <CButton
                          className="mt-3"
                          active
                          tabIndex={-1}
                          color="info"
                        >
                          {" "}
                          회의 화면 시작{" "}
                        </CButton>
                      </Link>
                    {/* </CCol>
                  </CRow> */}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default (TestListRoom);
