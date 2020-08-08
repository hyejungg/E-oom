import React from 'react'
import { Link } from 'react-router-dom' //****
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CForm,
  CButtonToolbar,  //**** 
} from '@coreui/react'

const MeetExit = () => {
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
                <CCol xs="12" md="2"></CCol>  {/* 여백 */}
                <CCol xs="12" md="8">
                  <h2>온라인 교육이 <b>종료</b>되었습니다.</h2>
                  <CButtonToolbar justify="center">
                    <Link to="../../meet/MeetScreen"> 
                      <CButton active tabIndex={-1} className="px-4" color="info"> 다시 참여 </CButton>
                    </Link>
                    <Link to="../dashboard/Dashboard"> 
                      <CButton active tabIndex={-1} className="px-4" color="info"> 메인 화면으로 돌아가기 </CButton>
                    </Link>
                  </CButtonToolbar>
                  <CButtonToolbar justify="center">
                    <CForm action="" method="post"> 
                     {/* 사용자 의견 (오디오/비디오 품질) 묻기 */}
                    </CForm>
                  </CButtonToolbar>
                </CCol>
                <CCol xs="12" md="2"></CCol>{/* 여백 */}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MeetExit
