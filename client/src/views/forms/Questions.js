import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CInputRadio,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Questions = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);

  return (
    <>
      <CRow>
        <CCol xs="12" md="2"></CCol>
        <CCol xs="12" md="8">
          <CCard>
            <CCardHeader>
              문의사항
              <small> Q {"&"} A </small>
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="1"></CCol>
                  <CCol xs="12" md="11">
                    <p className="form-control-static">
                      {" "}
                      **** 개선사항이나 문제점, 요구사항을 적어 보내주세요. ****
                    </p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">E-mali</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="email"
                      id="email-input"
                      name="email-input"
                      placeholder="Enter Email"
                      autoComplete="email"
                    />
                    <CFormText className="help-block">
                      답변 받을 e-mail을 적어주세요.
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">날짜</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="date"
                      id="date-input"
                      name="date-input"
                      placeholder="date"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">종류</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">문제점</option>
                      <option value="1">불편사항</option>
                      <option value="2">개선사항</option>
                      <option value="3">기타의견</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">문의사항</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="9"
                      placeholder="여기에 적어주세요..."
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="10">
                    <CLabel>
                      문의 사항을 보내기 전 다시 한 번 생각해보세요.{" "}
                    </CLabel>
                  </CCol>
                  <CCol md="2">
                    <CFormGroup variant="checkbox">
                      <CInputRadio
                        className="form-check-input"
                        id="radio1"
                        name="radios"
                        value="option1"
                      />
                      <CLabel variant="checkbox" htmlFor="radio1">
                        예
                      </CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">
                    File input
                  </CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Multiple File input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInputFile
                      id="file-multiple-input"
                      name="file-multiple-input"
                      multiple
                      custom
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md={3}>
                    Custom file input
                  </CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile custom id="custom-file-input" />
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CRow>
                <CCol xs="12" md="10"></CCol>
                <CCol md="2">
                  <CButton type="submit" size="sm" color="primary">
                    <CIcon name="cil-scrubber" /> Submit
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" md="2"></CCol>
      </CRow>
    </>
  );
};

export default Questions;
