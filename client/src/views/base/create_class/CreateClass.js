import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CRow,
} from "@coreui/react";

class CreateClass extends Component{
  
  render(){
    return (
      <>
        <CRow>
          <CCol xs="12" md="3"></CCol>
          <CCol xs="12" md="6">
            <CCard>
              <CCardHeader>Class 개설하기</CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInput
                          type="text"
                          id="input2-group2"
                          name="input2-group2"
                          value="CreateClassName"
                          placeholder="개설할 Class명 입력"
                        />
                        <CInputGroupAppend>
                          <CButton type="button" color="primary" onClick={() => alert('생성되었습니다')}>
                            생성
                          </CButton>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="3"></CCol>
        </CRow>
      </>
    );
  }
};

export default CreateClass;
