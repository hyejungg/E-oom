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

import UserDataService from '../../../services/user.service'
import SettingNewPW from '../search_idPw/SettingNewPW'

class SearchIDPW extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname : '',
      lname : '',
      birth : '',
      phone : '',

      email : '',
      
      isFindID : false,
      isFindPW : true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitID = this.submitID.bind(this);
    this.submitPW = this.submitPW.bind(this);
  }
  submitID = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();

    var data = {
      user_fname : this.state.fname,
      user_lname : this.state.lname,
      user_birthdate : this.state.birth,
      user_phone : this.state.phone
    };
    var responseData = [];

    UserDataService.getFindEmail(data)
    .then(response =>{
      responseData = response.data;
      console.log("responseData : " +  responseData );
      for(var value in responseData)
        console.log("key : " + value + " / value" +responseData[value]);

        // alert("회원님의 Email 주소는 " + "~" + " 입니다.");
    })
    .catch( e => {
        console.log(e);
    });

  }
  submitPW = (e) => {
    //페이지 리로딩 방지
    e.preventDefault(); 
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
                  <CForm>
                    <h3>아이디 잃어버렸나요?</h3>
                    <p className="text-muted">다음을 입력하세요.</p>
                    <CInputGroup className="mb-3">
                      <CInput type="text" id="fname" name="fname" placeholder="Enter First Name" autoComplete="user_fname"
                                value={this.state.fname} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="text" id="lname" name="lname" placeholder="Enter Last Name" autoComplete="user_lname"
                                value={this.state.lname} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="date" placeholder="Enter birthday" id="birth"
                                name="birth" autoComplete="user_birth"
                                value={this.state.birth} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Enter phone number (ex:010-0000-0000)" id="phone" 
                                name="phone" autoComplete="user_phone"
                                value={this.state.phone} onChange={this.handleChange} />
                    </CInputGroup>
                    <CRow>
                      <CCol align="center">
                        <CButton variant="outline" color="dark" className="px-4" 
                        type="submit" onClick={this.submitID}>아이디 찾기</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-dark p-4" style={{ width: '100%' }}>
                <CCardBody>
                  <CForm>
                    <h3>비밀번호 잃어버렸나요?</h3>
                    <p>다음을 입력하세요.</p>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Enter your ID" id="email" 
                                name="email" autoComplete="user_email"
                                value={this.state.email} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Enter phone number (ex:010-0000-0000)" id="phone" 
                                name="phone" autoComplete="user_phone"
                                value={this.state.phone} onChange={this.handleChange} />
                    </CInputGroup>
                    <CRow>
                      <CCol align="center">
                        <CButton variant="outline" color="secondary" className="px-4" 
                        type="submit" onClick={this.submitPW}>비밀번호 찾기</CButton>
                      </CCol>
                    </CRow>
                    {this.state.isFindPW 
                      ? <CRow className="justify-content-center" >
                          <CCol className="p-4">
                            <SettingNewPW />
                          </CCol>
                        </CRow>
                      : <CRow>{" "}</CRow>}
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
