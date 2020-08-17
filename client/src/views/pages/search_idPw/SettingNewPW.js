import React, { Component } from "react";
import {
  CCol,
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CRow,
  CCard,
} from "@coreui/react";

import SearchIDPW from '../search_idPw/SearchIDPW'
import UserDataService from '../../../services/user.service'

class SettingNewPW extends Component{
    constructor(props){
        super(props);
        this.state= {
            num : this.props.user_num,

            new_pw : '',
            new_re_pw : '',
            checkPwMsg : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.updatePW = this.updatePW.bind(this);
    }

    checkPW(value){
        if(this.state.new_pw !== value) {
          this.setState({
            checkPwMsg : "비밀번호가 일치하지 않습니다. 다시 입력하세요.",
          });
          return false;
        }
        this.state.checkPwMsg = '';
        return true;
      }

    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })

        //pw == re_pw check  
        if(e.target.name == "new_re_pw") this.checkPW(e.target.value);
    }

    updatePW = (e) => {
        e.preventDefault();
        
        console.log("this.state.num : " + this.state.num);

        var data = {
            user_num : this.state.num,
            user_pw : this.state.new_re_pw
        };
        var responseData = [];

        UserDataService.setNewPW(data)
        .then(response =>{
            responseData = response.data;
            console.log("responseData : " +  responseData );
            for(var value in responseData){
              console.log("user_num : " + responseData[value]);
            }
            if(responseData === 0){
                console.log("비밀번호 update 실패")
            }else{
                alert("정상적으로 비밀번호가 수정되었습니다. 다시 로그인을 시도하세요!!");
            }
        }).catch(e => {
            console.log(e);
        });
    }



    render(){
        return(
            <div>
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
                    <CInputGroup className="mb-3">
                        <div style={{color: "red"}}>{this.state.checkPwMsg}</div>
                    </CInputGroup>
                    <CRow>
                        <CCol align="center">
                            <CButton variant="outline" color="secondary" className="px-4" 
                                    type="submit" onClick={this.updatePW}>새 비밀번호 설정</CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </div>
        );
    }

}

export default SettingNewPW;