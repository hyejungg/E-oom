import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import CCImg from '@coreui/react/lib/card/CCardImg'
import DImag from '../dashboard/img_dashboard.png'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  return (
    <>
      {/* e-oom의 장점 */}
      <WidgetsDropdown /> 
      <CCard>
        <CCardBody>
          <CCImg src={DImag} className="mb-2" alt = {'대쉬보드 화면'}/>  
        </CCardBody>
      </CCard>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader cellPadding='10px'>
              <b>사용방법</b>
            </CCardHeader>
            <CCardBody>
              {/* 사용방법 내용 추가하기 */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
