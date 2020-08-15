import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CInput,
  CCardFooter,
  CForm,
  CLabel,
  CFormGroup,
} from "@coreui/react";
import "../../../scss/_custom.scss";

import usersData from "../../users/UsersData";

const fields = ["name", "registered", "role", "status"];
// const fields = ['학번','이름', '핸드폰 번호', '출석여부']

class Rollbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: "",
      class: "",
    }
    //Component 내 메서드에 적용할 땐 constructor에 bind 해주어야 함
    this.handleChange = this.handleChange.bind(this);
    this.isStudents = this.isStudents.bind(this);
  }

  //입력창 관리
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isStudents = (e) => {
    e.preventDefault();

    if ((this.state.grade && this.state.class)){
      console.log(this.state.grade + "학년 " + this.state.class + "반은 존재합니다.")
      //해당 학년/반 학생 목록 뜨도록 -> db랑 연결 필요
      return(
        <div>
          <CDataTable
            items={usersData}
            fields={fields}
            itemsPerPage={30}
            scopedSlots={{
              //check
              status: () => (
                <td>
                  <CInput type="checkbox" className="checkAttend mt" />
                </td>
              ),
            }}
            // pagination //다음페이지로 넘기는
          />
          <CCardFooter align="center">
            {/* //저장 onClick시 checkbox 활성화 된 값 -> db에 출석 기록 저장 */}
            <CButton color="primary" className="mt-3" active>{" "}저장{" "}</CButton>
          </CCardFooter>
        </div>
        )
      }else {
        console.log(this.state.grade + "학년 " + this.state.class + "반은 존재하지 않습니다.");
    }
  };

  render() {
    return (
      <>
        <CRow className="body">
          <CCol xs="12" lg="2"></CCol>
          <CCol xs="12" lg="8">
            <CCard>
              <CCardHeader>
                <CForm
                  method="post"
                  encType="edu/rollback"
                  className="rollback-searchgrade"
                >
                  {/* CForm에 대한 스타일 지정해야함 */}
                  {/* 학년 */}
                  <div>
                    <CFormGroup row>
                      <CCol md="1.5">
                        <CLabel htmlFor="grade" id="inputLabel"> {" "}학년{" "} </CLabel>
                      </CCol>
                      <CCol xs="4">
                        <CInput
                          type="text"
                          id="grade-input"
                          name="grade"
                          placeholder="Enter grade"
                          values={this.state.grade}
                          onChange={this.handleChange}
                        />
                      </CCol>
                    </CFormGroup>
                    {/* 반 */}
                    <CFormGroup row>
                      <CCol md="1.5">
                        <CLabel htmlFor="class" id="inputLabel">{" "}반{" "}</CLabel>
                      </CCol>
                      <CCol xs="4">
                        <CInput
                          type="text"
                          id="class-input"
                          name="class"
                          placeholder="Enter class"
                          values={this.state.class}
                          onChange={this.handleChange}
                        />
                      </CCol>
                    </CFormGroup>
                  </div>
                  <CCol>
                    {/* 조회를 onClick -> 해당 학년/반 학생 목록 뜨도록 */}
                    <CButton
                      color="light"
                      className="btnSearch"
                      active
                      onClick={this.isStudents}>{" "}조회{" "}</CButton>
                  </CCol>
                </CForm>
              </CCardHeader>
              <CCardBody>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" lg="2"></CCol>
        </CRow>
      </>
    );
  }
}

export default Rollbook;
