import React from "react";
import { Link } from "react-router-dom"; //****
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const MeetLink = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);

  return (
    <>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>E-oom 교육</CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-email">교육 참여하기</CLabel>
                  <CInput
                    type="email"
                    id="nf-email"
                    name="nf-email"
                    placeholder="교육 코드 입력"
                    autoComplete="email"
                  />
                  <CFormText className="help-block">
                    교육 코드를 입력해주세요
                  </CFormText>
                  {/* 참여버튼 옆으로 가게? */}
                  <CInputGroupAppend>
                    <Link to="../../meet/MeetParticipate">
                      <CButton type="button" color="primary">
                        참여
                      </CButton>
                    </Link>
                  </CInputGroupAppend>
                </CFormGroup>
              </CForm>
            </CCardBody>
            {/* <CCardFooter>
              <CButton type="submit" size="sm" color="primary">
                <CIcon name="cil-scrubber" /> 참여
              </CButton>{" "}
            </CCardFooter> */}
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>교육 참여하기</CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput
                        type="email"
                        id="input2-group2"
                        name="input2-group2"
                        placeholder="교육 코드 입력"
                      />
                      <CInputGroupAppend>
                        <Link to="../meet_participate/MeetParticipate">
                          <CButton type="button" color="primary">
                            참여
                          </CButton>
                        </Link>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default MeetLink;
