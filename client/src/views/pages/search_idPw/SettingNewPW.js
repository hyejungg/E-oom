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

class SettingNewPW extends Component{
    constructor(props){
        super(props);
        this.state= {
            new_pw : '',
            new_re_pw : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.updatePW = this.updatePW.bind(this);
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    updatePW = (e) => {
        e.preventDefault();
    }



    render(){
        return(
            <CForm>
                <CInputGroup className="mb-4">
                    <CInput type="password" placeholder="New Password" id="new_pw" 
                            name="new_pw" autoComplete="new_pw"
                            value={this.state.new_pw} onChange={this.handleChange} />
                    </CInputGroup>
                <CInputGroup className="mb-4">
                    <CInput type="password" placeholder="Repeat New Password" id="new_re_pw" 
                            name="new_re_pw" autoComplete="new_re_pw"
                            value={this.state.new_re_pw} onChange={this.handleChange} />
                </CInputGroup>
                <CRow>
                    <CCol align="center">
                        <CButton variant="outline" color="secondary" className="px-4" 
                                type="submit" onClick={this.updatePW}>새 비밀번호 설정</CButton>
                    </CCol>
                </CRow>
            </CForm>
        );
    }

}

export default SettingNewPW;