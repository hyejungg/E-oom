import React, { useState } from "react";
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
  CListGroupItem,
  CListGroup,
} from "@coreui/react";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const TestListRoom = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [lectureExplain] = useState('');
  const [lectureDate] = useState('');
  const [lectureTime] = useState('');
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>수업명</CCardHeader>
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
                  <CRow>
                    <CCol xs="4">
                      <CButton
                        className="mt-3"
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
                            <p></p>
                            <h3>새 강의 시작</h3>
                            <p></p>
                            <p>{"강의명이 들어올 자리"}</p>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">설명</div>
                            <div className="lectureInfo">
                              <CInputGroup className="mb-3">
                                <CInput type="text" id="lectureExplain" name="lectureExplain" placeholder="강의 설명을 적어주세요." autoComplete="lectureExplain"
                                    value={lectureExplain} />
                              </CInputGroup>
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">날짜</div>
                            <div className="lectureInfo">
                              <CInputGroup className="mb-3">
                                <CInput type="date" id="lectureDate" name="lectureDate" placeholder="강의 예약 날짜를 설정해주세요." autoComplete="lectureDate"
                                    value={lectureDate}  />
                              </CInputGroup>
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">시간</div>
                            <div className="lectureInfo">
                              <CInputGroup className="mb-3">
                                <CInput type="time" id="lectureTime" name="lectureTime" placeholder="강의 예약 시간을 설정해주세요." autoComplete="lectureTime"
                                    value={lectureTime} />
                              </CInputGroup>
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">회의ID</div>
                            <div className="lectureInfo">
                              {"이것은 랜덤지정?"}
                            </div>
                          </CCardHeader>
                          <CCardHeader>
                            <div className="lectureMenu">암호</div>
                            <div className="lectureInfo">
                              {"이것은 랜덤지정?"}
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
                            >
                              {" "}
                              예약{" "}
                            </CButton>
                          </CCol>
                        </CRow>
                      </CTabPane>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <CCard accentColor="success">
                        <CCardHeader>향후 예약된 강의들</CCardHeader>
                          <CCardBody>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell>수업명</TableCell>
                                  <TableCell>수업인원</TableCell>
                                  <TableCell>학수번호</TableCell>
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
                  {`2.`}
                </CTabPane>
                <CTabPane>
                  <CListGroup accent className="mt-3">
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
                      </CButton>{" "}
                      <Link to="/base/meet_create/MeetCreate">
                        <CButton
                          className="mt-3"
                          active
                          tabIndex={-1}
                          color="info"
                        >
                          {" "}
                          새 개인 회의 시작{" "}
                        </CButton>
                      </Link>
                    </CCol>
                  </CRow>
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
