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

class Login extends Component {
  // 추가
  constructor(props) {
    super(props)
    this.state = {
      id : '',
      pw : '',
      isLogin: null
    };
  }
  handleSubmit = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();
    console.log(this.state); //입력한 id와 pw 콘솔창에서 확인
    
    // //fetch 멤버 초기화
    // const login_info = {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     "Content-Type": "application/json" //서버 구축된 후 헤더 재지정 필요
    //   }
    // };
    // //백엔드 서버에 비동기 요청(fetch)
    // fetch("서버주소", login_info) //서버 구축된 후 서버주소 재지정 필요
    //   .then(res => { //성공한다면 
    //     return res.json();
    //   })
    //   .then(json => { 
    //     //json형식 {id: , pw: , success: true}
    //     if (json.success === true) {
    //       alert("로그인되었습니다");
    //       // 서버로 부터 받은 JSON형태의 데이터를 로컬스토리지에 우선 저장한다.
    //       window.localStorage.setItem('userInfo', JSON.stringify(json))
    //       //스테이트에 유저정보를 저장한다.
    //       this.setState({
    //         id: json.id,
    //         pw: json.pw,
    //         isLogin: json.success
    //       });
    //       this.props.history.push("/main") //history를 이용하여 /main으로 props 보낸다?
    //     } else {
    //       alert("아이디 혹은 비밀번호를 확인하세요");
    //     }
    //   });
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
                      <CInput type="text" placeholder="아이디" autoComplete="username"
                              value={this.state.id} onChange={this.handleChange} name="id"/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="비밀번호" autoComplete="current-password"
                              value={this.state.pw} onChange={this.handleChange} name="pw" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="5">
                        <CButton color="primary" className="px-4" type="submit">로그인</CButton>
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
