import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CEmbed,
  CEmbedItem,
  CFormGroup, //****
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeaderBrand,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import "../../../src/scss/_custom.scss";

class MeetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exitValue: true,
      //수업 진행 시간
      time: 0,
      hour: 0,
      min: 0,
      sec: 0,

      room_info : '',
      room_num : '',
    };
    this.openQuestion = this.openQuestion.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() { 
    // componentWillMount(){
    var recievedMessage = this.props.location.state;
    console.log(recievedMessage)
    // this.setState({
    //   room_info : recievedMessage['room_info'],
    //   room_num : recievedMessage['room_num']
    // });
    this.state.room_info = recievedMessage['room_info'];
    this.state.room_num = recievedMessage['room_num'];
    console.log(this.state);
  }

  /*질문하기*/
  openQuestion = () => {
    var receQuestion = prompt("질문이 무엇인가요 ?", "여기다 입력하세요");
    // 질문을 선생님만 받을 수 있도록 설정 -> 학생에게 따로 답장 가능하도록 수정
    console.log(receQuestion);
  };

  /*출석부 새 창 띄우기*/
  openPopup(e) {
    e.preventDefault();
    var url = "../Rollbook/Rollbook.js";
    var name = "E-oom 출석부";
    var options =
      "width=800, height=600, top=30, left=30, resizable=1, scrollbars=1";
    window.open(url, name, options);
  }

  handleChange = (e) => {
    // this.state.time = Number(this.state.time);
    while (!this.state.exitValue) {
      this.setState({
        [e.state.time]: this.state.time++,
      });
    }
    console.log("수업 진행 시간 :" + this.state.time);
  };

  render() {
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <CFormGroup row className="mt-3">
                  <CCol align="left" xs="12" sm="9">
                    <CButton active tabIndex={-1} color="info">
                      {" "}
                      화면공유{" "}
                    </CButton>{" "}
                    <CButton
                      active
                      tabIndex={-1}
                      color="info"
                      onClick={(e) => this.openPopup(e)}
                    >
                      {" "}
                      출석부{" "}
                    </CButton>{" "}
                    <CButton active tabIndex={-1} color="info">
                      {" "}
                      소회의실{" "}
                    </CButton>{" "}
                    <CButton
                      active
                      tabIndex={-1}
                      color="info"
                      onClick={this.openQuestion}
                    >
                      {" "}
                      질문하기{" "}
                    </CButton>{" "}
                  </CCol>
                  <CCol xs="12" sm="3">
                    <CCol align="right">
                      <CButton block color="link" disabled>
                        {/* 수업진행시간 count 필요 */}
                        수업 진행 시간 : {this.state.time}{" "}
                      </CButton>
                    </CCol>
                  </CCol>
                </CFormGroup>
              </CCardHeader>
              <CCardBody>
                {/* 유저가 보이는 화면 */}
                <CCol>
                  {/* <ShowWebRTC></ShowWebRTC> */}
                </CCol>
              </CCardBody>
              <CCardFooter>
                <CFormGroup row className="mt-3">
                  <CCol col="6" sm="4" md="2">
                    <CButton
                      tabIndex={-1}
                      block
                      variant="outline"
                      name={"btn_video"}
                      id={"btn_video"}
                      color="success"
                    >
                      비디오 OFF/ON
                    </CButton>
                  </CCol>
                  <CCol col="6" sm="4" md="2">
                    <CButton
                      tabIndex={-1}
                      block
                      variant="outline"
                      name={"btn_audio"}
                      id={"btn_audio"}
                      color="warning"
                    >
                      오디오 OFF/ON
                    </CButton>
                  </CCol>
                  <CCol align="right" col="6" sm="4" md="2">
                    <CButton
                      tabIndex={-1}
                      block
                      variant="outline"
                      name={"btn_audio"}
                      id={"btn_audio"}
                      color="info"
                    >
                      참가자 표시
                    </CButton>
                  </CCol>
                  <CCol align="right" col="3" sm="2" md="1">
                    <CButton
                      tabIndex={-1}
                      block
                      variant="outline"
                      name={"btn_audio"}
                      id={"btn_audio"}
                      color="info"
                    >
                      채팅
                    </CButton>
                  </CCol>
                  <CCol align="right">
                    <CDropdown>
                      <CDropdownToggle color="secondary">
                        더보기
                      </CDropdownToggle>
                      <CDropdownMenu placement="top">
                        <CDropdownItem>초대링크 생성</CDropdownItem>
                        <CDropdownItem>회의 녹화 시작</CDropdownItem>
                        <CDropdownItem>레이아웃 변경</CDropdownItem>
                        <CDropdownItem>전체화면</CDropdownItem>
                        <CDropdownItem>설정</CDropdownItem>
                        <Link to={{
                              pathname: "/meet_exit/MeetExit",
                              state: {
                                room_num: this.state.room_num,
                              },
                            }}>
                          <CDropdownItem>종료</CDropdownItem>
                        </Link>
                        {/* <CDropdownItem href="/meet_exit/MeetExit">
                          종료
                        </CDropdownItem> */}
                      </CDropdownMenu>
                    </CDropdown>
                  </CCol>
                </CFormGroup>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default MeetScreen;
