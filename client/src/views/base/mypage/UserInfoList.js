import React, { Component } from "react";
import { CCardHeader } from "@coreui/react";

class UserInfoList extends React.Component{
    render(){
        return(
            <div>
                <CCardHeader>성 : <span>{this.props.user_lname}</span></CCardHeader>
                <CCardHeader>이름 : <span>{this.props.user_fname}</span></CCardHeader>
                <CCardHeader>로그인 이메일 : <span>{this.props.user_email}</span></CCardHeader>
                <CCardHeader>핸드폰 번호 : <span>{this.props.user_phone}</span></CCardHeader>
                <CCardHeader>생년월일 : <span>{this.props.user_birthday}</span></CCardHeader>   
            </div>
            
        );
    }
}
export default UserInfoList;