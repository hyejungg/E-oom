import React, { Component } from "react";
import {
  CListGroup,
  CListGroupItem,
  CCardBody,
  CCardHeader,
} from "@coreui/react";

class UserInfoList extends React.Component {
  render() {
    return (
      <div>
        <CCardHeader>
          <CCardBody>
            <h2 color="blue">{this.props.user_nickname} 님! 반갑습니다.</h2>
          </CCardBody>
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            <CListGroupItem disabled>
              성 : {this.props.user_lname}
            </CListGroupItem>
            <CListGroupItem disabled>
              이름 : {this.props.user_fname}
            </CListGroupItem>
            <CListGroupItem disabled>
              로그인 이메일 : {this.props.user_email}
            </CListGroupItem>
            <CListGroupItem disabled>
              핸드폰 번호 : {this.props.user_phone}
            </CListGroupItem>
            <CListGroupItem disabled>
              생년월일 : {this.props.user_birthdate}
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </div>
    );
  }
}
export default UserInfoList;
