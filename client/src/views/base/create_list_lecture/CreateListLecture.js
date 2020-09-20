// import React, { useState, Component } from "react";
// import { Link } from "react-router-dom"; //****
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CListGroup,
//   CListGroupItem,
//   CRow,
// } from "@coreui/react";

// const { Component } = require("react");

// import usersData from "../../users/UsersData";

// const CreatedLecture = usersData.map((usersData) => (
//   <Link to="create_list_room/ListRoom">
//     <CListGroupItem key={usersData.id}>{usersData.name}</CListGroupItem>
//   </Link>
// ));

// const AttendingCourse = usersData.map((usersData) => (
//   <CListGroupItem disabled key={usersData.id}>
//     {usersData.name}
//   </CListGroupItem>
// ));

// class CreateListLecture extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <CRow>
//           <CCol sm="12" xl="3"></CCol>
//           <CCol sm="12" xl="6">
//             <CCard>
//               <CCardHeader align="center">
//                 000 님이 개설중인 Class 목록입니다.
//                 <small> </small>
//               </CCardHeader>
//               <CCardBody>
//                 <CListGroup align="center">
//                   {/* 1. usersData 이름 동적으로 배열추가
//                       2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
//                   {CreatedLecture}
//                 </CListGroup>
//               </CCardBody>
//             </CCard>
//           </CCol>
//           <CCol sm="12" xl="3"></CCol>
//           <CCol sm="12" xl="3"></CCol>
//           <CCol sm="12" xl="6">
//             <CCard>
//               <CCardHeader align="center">
//                 000 님이 수강중인 Class 목록입니다.
//                 <small> </small>
//               </CCardHeader>
//               <CCardBody>
//                 <CListGroup align="center">
//                   {/* 1. usersData의 이름만이라도 리스트업 해보기
//                     2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
//                   {AttendingCourse}
//                   {/* 지금은 생성하기 탭이니까 수강하는 거는 안보이게? */}
//                 </CListGroup>
//               </CCardBody>
//             </CCard>
//           </CCol>
//           <CCol sm="12" xl="3"></CCol>
//         </CRow>
//       </>
//     );
//   }
// }

// export default CreateListLecture;

import React, { Component } from "react";
import Lecture from "../../../components/Lecture"; //Lecture 목록 불러오기
import LectureAdd from "../../../components/LectureAdd"; //
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import authHeader from "../../../services/auth-header";
import AuthDataService from "../../../services/auth.service"

const styles = (theme) => ({
  root: {
    width: "100%",
    minWidth: 1080,
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    marginLeft: 18,
    marginRight: 18,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  tableHead: {
    fontSize: "1.0rem",
  },
});

class CreateListLecture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: "",
      completed: 0,
    };
  }

  stateRefresh = () => {
    this.setState({
      lectures: "",
      completed: 0,
    });
    this.callApi()
      .then((res) => this.setState({ lectures: res }))
      .catch((err) => console.log(err));
  };

  //API에 접근해서 데이터를 받아오는 작업
  componentDidMount() {
    let user_data;

    user_data = AuthDataService.getCurrentUser();
    if(user_data == null) {
      alert("로그인 후 이용 부탁드립니다.")
      this.props.history.push("../pages/login/Login");
    }

    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => {
        this.setState({ lectures: res });
        console.log(this.state.lectures);
      })
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/lecture", { headers: authHeader() });
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    const cellList = ["번호", "수업명", "수업인원", "수업ID", "설정"];
    return (
      <div className={classes.root}>
        <div className={classes.menu}>
          <LectureAdd stateRefresh={this.stateRefresh} />
        </div>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {cellList.map((c) => {
                  return (
                    <TableCell className={classes.tableHead}>{c}</TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.lectures ? (
                this.state.lectures.map((c) => {
                  return (
                    <Lecture
                      stateRefresh={this.stateRefresh}
                      key={c.lecture_num}
                      lecture_num={c.lecture_num}
                      lecture_title={c.lecture_title}
                      lecture_capacity={c.lecture_capacity}
                      lecture_id={c.lecture_id}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress
                      className={classes.progress}
                      variant="determinate"
                      value={this.state.completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(CreateListLecture);
