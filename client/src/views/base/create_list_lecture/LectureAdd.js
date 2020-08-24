import React from "react";
import { post } from "axios";
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

class LectureAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classtitle: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addClass().then((response) => {
      console.log(response.data);
    });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addClass = () => {
    const url = "/api/usersDatas";
    const formData = new FormData();
    // formData.append("image", this.state.file);
    // formData.append("name", this.state.userName);
    // formData.append("birthday", this.state.birthday);
    // formData.append("gender", this.state.gender);
    // formData.append("job", this.state.job);
    formData.append("classtitle", this.state.classtitle);
    //파일이 포함된 데이터를 서버로 전송할 때
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12" md="3"></CCol>
          <CCol xs="12" md="6">
            <CCard>
              <CCardHeader>수업 생성하기</CCardHeader>
              <CCardBody>
                <CForm onSubmit={this.handleFormSubmit}>
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInput
                          type="text"
                          name="classtitle"
                          value={this.state.classtitle}
                          onChange={this.hadleValueChange}
                          placeholder="생성할 수업명 입력"
                        />
                        <CInputGroupAppend>
                          <CButton
                            type="submit"
                            color="success"
                            onClick={() => alert("생성되었습니다")}
                          >
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
}

//   render() {
//     return (
//       <from onSubmit={this.handleFormSubmit}>
//         <h1>Class 생성하기</h1>
//         프로필 이미지:{" "}
//         <input
//           type="file"
//           name="file"
//           file={this.state.file}
//           value={this.state.fileName}
//           onChange={this.handleFileChange}
//         />
//         <br />
//         이름:{" "}
//         <input
//           type="text"
//           name="userName"
//           value={this.state.userName}
//           onChange={this.hadleValueChange}
//         />
//         <br />
//         생년월일:{" "}
//         <input
//           type="text"
//           name="birthday"
//           value={this.state.birthday}
//           onChange={this.handleValueChange}
//         />
//         <br />
//         성별:{" "}
//         <input
//           type="text"
//           name="gender"
//           value={this.state.gender}
//           onChange={this.handleValueChange}
//         />
//         <br />
//         직업:{" "}
//         <input
//           type="text"
//           name="job"
//           value={this.state.job}
//           onChange={this.handleValueChange}
//         />
//         <br />
//         <button type="submit">생성하기</button>
//       </from>
//     );
//   }
// }

export default LectureAdd;
