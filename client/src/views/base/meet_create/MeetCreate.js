import React, { Component } from 'react'
import { Link } from 'react-router-dom' //****
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CEmbed,
  CSwitch,     //**** 
  CFormGroup,  //**** 
  CLabel,      //**** 
  CForm,
  CButtonToolbar,  //**** 
} from '@coreui/react'

// //로딩 화면 스타일
// const styles = (theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 1080
//   },
//   progress: {
//     margin: theme.spacing(2)
//   }
// })

class MeetCreate extends Component{

  //함수에서 aPI를 비동기적으로 호출.
  // componentDidMount(){
  //   this.timer = setInterval(this.progress, 20);
  //   this.callApi()
  //   .then(res => this.setState({}))   // API에서 응답이 왔을 때 View가 갱신
  //   .catch(err => console.log(err));   // API에서 응답이 없을 때 사용자에게 로딩 화면 출력
  // }

  // callApi = async() => {
  //   const response = await fetch('api/constomers')
  //   const body = await response.json();
  //   return body;
  // }

  render(){
    return (
      <>
        {
          <CRow>
            <CCol>
              <CCard>
                <CCardBody>
                  {/* 회의 준비 화면 레이아웃 구성
                      비디오 on/off, 오디오 on/off, 비디오화면, 참여button
                      참여button 클릭 시 -> 회의 화면으로 이동
                  */}
                  <CRow>
                    <CCol xs="12" md="2"></CCol>  {/* 여백 */}
                    <CCol xs="12" md="4">
                      <CEmbed>
                        {/* 비디오 화면 */}
                        {/* <CEmbedItem src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"/> */} 
                      </CEmbed>
                    </CCol>
                  {/* 중간중간 공백 어케줌? ㅠㅠ */}
                    <CCol xs="12" md="4">
                      <h2>온라인 교육에 <b>생성</b>하시겠습니까?</h2>
                      <CButtonToolbar justify="center">
                        <Link to="../../meet/MeetScreen"> 
                          <CButton active tabIndex={-1} className="px-4" color="danger"> 생성 </CButton>
                        </Link>
                      </CButtonToolbar>
                      <CButtonToolbar justify="center">
                        <CForm action="" method="post"> 
                          <CFormGroup>
                            <CLabel htmlFor="btn_video">비디오 OFF/ON</CLabel>
                            <CSwitch name={'btn_video'} id={'btn_video'} 
                                    className={'mx-1'} shape={'pill'} color={'success'} variant={'opposite'} defaultChecked />
                          </CFormGroup>
                          <CFormGroup>
                            <CLabel htmlFor="btn_audio">오디오 OFF/ON</CLabel>
                            <CSwitch name={'btn_audio'} id={'btn_audio'} 
                                    className={'mx-1'} shape={'pill'} color={'warning'} variant={'opposite'} defaultChecked />
                          </CFormGroup>
                          </CForm>
                      </CButtonToolbar>
                    </CCol>
                    <CCol CCol xs="12" md="2"></CCol>{/* 여백 */}
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        }
      </>
    );
  }

}

export default MeetCreate
