import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CRow,
  CLabel,
} from '@coreui/react'

class SearchIDPW extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_fname : '',
      user_lname : '',
      user_birth : '',
      user_phone : '',
      user_id : '',
      user_pw : '',
      isLogin: null
    };
  }
  handleSubmit = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();
    console.log(this.state); 
  }
  //입력창 관리 (ID, PW)
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    return(
      <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4 bg-secondary">
                <CCardBody> 
                  <CForm onSubmit={this.handleSubmit}>
                    <h3>아이디를 잃어버렸나요?</h3>
                    <p className="text-muted">다음을 입력하세요.</p>
                    <CInputGroup className="mb-3">
                      <CInput type="text" id="user_fname" name="user_fname" placeholder="Enter First Name" autoComplete="user_fname"
                                value={this.state.user_fname} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="text" id="user_lname" name="user_lname" placeholder="Enter Last Name" autoComplete="user_lname"
                                value={this.state.user_fname} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Enter birthday (ex:00년1월1일 -> 000101)" id="user_birth"
                                name="user_birth" autoComplete="user_birth"
                                value={this.state.user_birth} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Enter phone number (ex:010-0000-0000)" id="user_phone" 
                                name="user_phone" autoComplete="user_phone"
                                value={this.state.user_phone} onChange={this.handleChange} />
                    </CInputGroup>
                    <CRow>
                      <CCol align="center">
                        <CButton variant="outline" color="dark" className="px-4" type="submit">아이디 찾기</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-dark p-4" style={{ width: '100%' }}>
                <CCardBody>
                  <CForm onSubmit={this.handleSubmit}>
                    <h3>비밀번호를 잃어버렸나요?</h3>
                    <p>다음을 입력하세요.</p>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Enter your ID" id="user_id" 
                                name="user_id" autoComplete="user_id"
                                value={this.state.user_id} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Enter phone number (ex:010-0000-0000)" id="user_phone" 
                                name="user_phone" autoComplete="user_phone"
                                value={this.state.user_phone} onChange={this.handleChange} />
                    </CInputGroup>
                    <CRow>
                      <CCol align="center">
                        <CButton variant="outline" color="secondary" className="px-4" type="submit">비밀번호 찾기</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    );
  }
}


export default SearchIDPW
