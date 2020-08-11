import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import UserDataService from '../../../services/user.service'

var isLogin = false;

class Login extends Component {
  // 추가
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      pw : '',
      isSubmit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();

    var data = {
      user_email: this.state.email,
      user_pw: this.state.pw
    };
    console.log(data);
  
    UserDataService.getEmail(data.user_email)
    .then(response => {
      //response 값이 num이라면 isLogin = true 
      //num이 아니라면 -1 반환 isLogin = false 
      this.setState({
        email: response.data.user_email,
        pw: response.data.user_pw,

        isSubmit: true
      });
      console.log(response.data);
      //isCreate 가 true면 메인 화면으로
      isLogin = true;
    })
    .catch(e => {
      isLogin = false;
      console.log(e);
    });
  }

  //setting Input Values (ID, PW)
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
              <CCard className="p-4">
                <CCardBody> 
                  <CForm onSubmit={this.handleSubmit}>
                    <h1>로그인</h1>
                    <p className="text-muted">아이디와 비밀번호를 입력하세요.</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="아이디" autoComplete="UserEmail"
                              value={this.state.email} onChange={this.handleChange} name="email"/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="비밀번호" autoComplete="Current-password"
                              value={this.state.pw} onChange={this.handleChange} name="pw" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="5">
                        <CButton color="primary" className="px-4" type="submit" onClick={this.handleSubmit}>로그인</CButton>
                        {console.log(isLogin)} 
                        {isLogin ? <Link to = "/dashboard/Dashboard"></Link> : console.log("로그인 실패")}
                      </CCol>
                      <CCol xs="7" className="text-right">
                        <Link to="pages/search_idPw/SearchIDPW">
                          <CButton color="link" className="px-0">아이디/비밀번호 찾기</CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>E-oom</h2>
                    <p>E-oom은 처음이십니까?</p>
                    <Link to="/register">
                      <CButton color="info" className="mt-3" active tabIndex={-1}>회원가입</CButton>
                    </Link>
                  </div>
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


export default Login
