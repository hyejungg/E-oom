import React, { Component } from "react";
import { CCardHeader } from "@coreui/react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class UserInfoList extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>성 : <span>{this.props.user_lname}</span></TableCell>
                <TableCell>이름 : <span>{this.props.user_fname}</span></TableCell>
                <TableCell>로그인 이메일 : <span>{this.props.user_email}</span></TableCell>
                <TableCell>핸드폰 번호 : <span>{this.props.user_phone}</span></TableCell>
                <TableCell>생년월일 : <span>{this.props.user_birthday}</span></TableCell>   
            </TableRow>
            
        );
    }
}
export default UserInfoList;