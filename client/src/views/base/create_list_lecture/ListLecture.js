import React, { useState } from "react";
import { Link } from 'react-router-dom'
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
  CListGroup
} from "@coreui/react";

const ListLecture = () => {
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
                  <CButton className="mt-3" active tabIndex={-1} color="info">
                    {" "}새 강의 예약{" "}
                  </CButton>
                </CTabPane>
                <CTabPane>{`2.`}</CTabPane>
                <CTabPane>
                  <CListGroup accent className="mt-3">
                    <CRow>
                      <CCol xs="12" md="4">
                        <CListGroupItem accent="dark">개인 회의명</CListGroupItem>
                      </CCol>
                      <CCol xs="12" md="8">
                      {'3'}
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12" md="4">
                        <CListGroupItem accent="secondary">개인 회의 ID</CListGroupItem>
                      </CCol>
                      <CCol xs="12" md="8">
                      {'3'}
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12" md="4">
                        <CListGroupItem accent="dark">개인 회의 PW</CListGroupItem>
                      </CCol>
                      <CCol xs="12" md="8">
                      {'3'}
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12" md="4">
                        <CListGroupItem accent="secondary">개인 회의 초대링크</CListGroupItem>
                      </CCol>
                      <CCol xs="12" md="8">
                        {'3'}
                      </CCol>
                    </CRow>
                  </CListGroup>
                  <CRow>
                    <CCol align="right">
                      <CButton className="mt-3" active tabIndex={-1} color="light">
                      {" "}개인 회의 정보 수정{" "}
                      </CButton>
                      {" "}
                      <Link to="/base/meet_create/MeetCreate">
                        <CButton className="mt-3" active tabIndex={-1} color="info">
                        {" "}새 개인 회의 시작{" "}
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
