import React, { useState, Component } from "react";
import { Link } from "react-router-dom"; //****
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
} from "@coreui/react";

import usersData from "../../users/UsersData";

const CreatedRoom = usersData.map((usersData) => (
  <CListGroupItem disabled key={usersData.id}>
    {usersData.name}
  </CListGroupItem>
));

const AttendingCourse = usersData.map((usersData) => (
  <Link to="participate_list_room/ListRoom">
    <CListGroupItem key={usersData.id}>{usersData.name}</CListGroupItem>
  </Link>
));

class ParticipateListLecture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CRow>
          <CCol sm="12" xl="3"></CCol>
          <CCol sm="12" xl="6">
            <CCard>
              <CCardHeader align="center">
                000 님이 개설중인 Class 목록입니다.
                <small> </small>
              </CCardHeader>
              <CCardBody>
                <CListGroup align="center">
                  {/* 1. usersData 이름 동적으로 배열추가
                      2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
                  {CreatedRoom}
                </CListGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="12" xl="3"></CCol>
          <CCol sm="12" xl="3"></CCol>
          <CCol sm="12" xl="6">
            <CCard>
              <CCardHeader align="center">
                000 님이 수강중인 Class 목록입니다.
                <small> </small>
              </CCardHeader>
              <CCardBody>
                <CListGroup align="center">
                  {/* 1. usersData의 이름만이라도 리스트업 해보기
                    2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
                  {AttendingCourse}
                  {/* 지금은 생성하기 탭이니까 수강하는 거는 안보이게? */}
                </CListGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="12" xl="3"></CCol>
        </CRow>
      </>
    );
  }
}

export default ParticipateListLecture;
