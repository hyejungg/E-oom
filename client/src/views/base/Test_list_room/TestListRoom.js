import React, { useState, useReducer  } from "react";
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
import { makeStyles } from '@material-ui/core/styles';

import RoomDataService from "../../../services/rooms.service"

//circle progress
const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3) * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(2) * 2,
  },
}));

const TestListRoom = () => {
  const [activeTab, setActiveTab] = useState(1);
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value
    };
  }
  const [state, dispatch] = useReducer(reducer, {
    lectureNum : 4,
    lectureName: 'English class ',
    lectureDate: '2020-12-25',
    lectureTime: '14:40:00',
    lectureRecursion: 'week',
    lectureReminder: 'true',

    completed: 0,
  });
  // const {lectureName, lectureDate, lectureTime, lectureRecursion, lectureReminder} = state;
  const onChange = e => {
    // e.preventDefault();
    dispatch(e.target);
    console.log(state);
  };

  //progress
  const progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  function callApi(data){
    var responseData = [];

    RoomDataService.createRoom(data)
    .then(response =>{
      responseData = response.data;
      if(responseData["message"]){
        alert(responseData["message"]);
      }else{
        alert("입력 정보를 다시 입력하세요!!");
      }
    })
    .catch(error => {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      console.log(resMessage);
    })
  } 
  //reservation
  const submitHandle = async(e) =>{
    e.preventDefault();

    var data = {
      lecture_num : state.lectureNum,
      room_title : state.lectureName,
      room_startdate : state.lectureDate,
      room_starttime : state.lectureTime,
      room_recursion : state.lectureRecursion,
      room_reminder : state.lectureReminder
    }

    console.log("data : " + data);
    await callApi(data);
  }
  
  
  const {classes} = styles();
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>수업명 / 담당자</CCardHeader>
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
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                    <TableCell colSpan="6" align="center">
                                      <CircularProgress
                                        // className={classes.progress}
                                        variant="determinate"
                                        value={state.completed}
                                      />
                                    </TableCell>
                                  </TableRow>
                                {/* {this.state.lectures ? (
                                  this.state.lectures.map((c) => {
                                    return (
                                      <Lecture
                                        stateRefresh={this.stateRefresh}
                                        key={c.lecture_num}
                                        lecture_num={c.lecture_num}
                                        lecture_title={c.lecture_title}
                                        lecture_capacity={c.lecture_capacity}
                                        lecture_id={c.lecture_id}
                                      />
                                    );
                                  })
                                ) : (
                                  <TableRow>
                                    <TableCell colSpan="6" align="center">
                                      <CircularProgress
                                        className={classes.progress}
                                        variant="determinate"
                                        value={this.state.completed}
                                      />
                                    </TableCell>
                                  </TableRow>
                                )} */}
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
                        <CForm>
                          <CCardHeader>
                            <h3>새 강의 시작</h3>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">강의명</div>
                            <div className="lectureInfo">
                              <CInputGroup className="mb-3">
                                <CInput type="text" name="lectureName" value={state.lectureName} onChange={onChange}
                                        placeholder="강의명을 적어주세요." autoComplete="lectureName"/>
                              </CInputGroup>
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">날짜</div>
                            <div className="lectureInfo">
                              <CInputGroup className="mb-3">
                                <CInput type="date" name="lectureDate" value={state.lectureDate} onChange={onChange}
                                       placeholder="강의 예약 날짜를 설정해주세요." autoComplete="lectureDate"/>
                              </CInputGroup>
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">시간</div>
                            <div className="lectureInfo">
                              <CInputGroup className="mb-3">
                                <CInput type="time" name="lectureTime" value={state.lectureTime} onChange={onChange}
                                        placeholder="강의 예약 시간을 설정해주세요." autoComplete="lectureTime"/>
                              </CInputGroup>
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">
                              <CInputGroup>
                                <CLabel htmlFor="lectureRecursion">반복알림여부</CLabel>
                              </CInputGroup>
                            </div>
                            <div className="lectureInfo">
                              <CSelect custom value={state.lectureRecursion}
                                         label="lectureRecursion" 
                                         name="lectureRecursion"
                                         onChange={onChange}>
                                  <option value={"Never"}>Never</option>
                                  <option value={"Every Day"}>Every Day</option>
                                  <option value={"Every Week"}>Every Week</option>
                                  <option value={"Every 2 Weeks"}>Every 2 Weeks</option>
                                  <option value={"Every Month"}>Every Month</option>
                                  <option value={"Every Year"}>Every Year</option>
                              </CSelect>
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">
                              <CInputGroup>
                                <CLabel htmlFor="lectureReminder">이메일로???? 알림여부</CLabel>
                              </CInputGroup>
                            </div>
                            <div className="lectureInfo">
                              <CInputGroup>
                                <CSelect custom value={state.lectureReminder}
                                         label="lectureReminder" 
                                         name="lectureReminder"
                                         onChange={onChange}>
                                  <option value={true}>Yes</option>
                                  <option value={false}>No</option>
                                </CSelect>
                              </CInputGroup>  
                             </div>
                          </CCardHeader>
                        </CForm>
                        <CRow>
                          <CCol align="right">
                            <CButton
                              className="mt-3"
                              active={activeTab === 0}
                              tabIndex={-1}
                              color="info"
                              onClick={submitHandle}
                            >
                              {" "}
                              예약{" "}
                            </CButton>
                          </CCol>
                        </CRow>
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

export default TestListRoom;
