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
  CListGroupItem,
  CListGroup,
} from "@coreui/react";

const ListLecture = () => {
  const [activeTab, setActiveTab] = useState(1);
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
                        <CCardHeader>
                          <p></p>
                          <h3>새 강의 시작</h3>
                          <p></p>
                          <p>{"강의명이 들어올 자리"}</p>
                        </CCardHeader>
                        <CCardHeader>
                          <div className="lectureMenu">설명</div>
                          <div className="lectureInfo">{"강의 설명~~~~"}</div>
                        </CCardHeader>
                        <CCardHeader>
                          <div className="lectureMenu">날짜</div>
                          <div className="lectureInfo">
                            {"버튼 식으로 수정!!"}
                          </div>
                        </CCardHeader>
                        <CCardHeader>
                          <div className="lectureMenu">시간</div>
                          <div className="lectureInfo">
                            {"버튼 식으로 수정!!"}
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
                </CTabPane>
                <CTabPane>{`2.`}</CTabPane>
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

export default ListLecture;
