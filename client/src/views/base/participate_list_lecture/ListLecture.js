import React, { useState } from "react";
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
              </CNav>
              <CTabContent>
                <CTabPane>
                  <CButton className="mt-3" active tabIndex={-1} color="info">
                    {" "}새 강의 예약{" "}
                  </CButton>
                </CTabPane>
                <CTabPane>{`2.`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ListLecture;
