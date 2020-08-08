import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="화면 공유 기능"
          text="클라우드 환경의 비대면 온라인 교육 서비스 블라블라"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="다양한 판서도구 기능"
          text="블라블라블라 화면 공유시 다양한 판서도구 제공"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="출석기능"
          text="블라블라 교육 맞춤형 비대면 플랫폼 어쩌구 랄라"
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="클라우드 환경"
          text="클라우드 환경의 비대면 온라인 교육 서비스 블라블라"
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
