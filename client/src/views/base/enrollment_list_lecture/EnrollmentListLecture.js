// // import React, { useState, Component } from "react";
// // import { Link } from "react-router-dom"; //****
// // import {
// //   CCard,
// //   CCardBody,
// //   CCardHeader,
// //   CCol,
// //   CListGroup,
// //   CListGroupItem,
// //   CRow,
// // } from "@coreui/react";

// // import usersData from "../../users/UsersData";

// // // const CreatedRoom = usersData.map((usersData) => (
// // //   <CListGroupItem disabled key={usersData.id}>
// // //     {usersData.name}
// // //   </CListGroupItem>
// // // ));

// // // const AttendingCourse = usersData.map((usersData) => (
// // //   <Link to="participate_list_room/ListRoom">
// // //     {/* <CListGroupItem key={usersData.id}>{usersData.name}</CListGroupItem> */}
// // //   </Link>
// // // ));

// // class ParticipateListLecture extends Component {
// //   constructor(props) {
// //     super(props);
// //   }

// //   render() {
// //     return (
// //       <>
// //         <CRow>
// //           <CCol sm="12" xl="3"></CCol>
// //           <CCol sm="12" xl="6">
// //             <CCard>
// //               <CCardHeader align="center">
// //                 000 님이 개설중인 Class 목록입니다.
// //                 <small> </small>
// //               </CCardHeader>
// //               <CCardBody>
// //                 <CListGroup align="center">
// //                   {/* 1. usersData 이름 동적으로 배열추가
// //                       2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
// //                   {/* {CreatedRoom} */}
// //                 </CListGroup>
// //               </CCardBody>
// //             </CCard>
// //           </CCol>
// //           <CCol sm="12" xl="3"></CCol>
// //           <CCol sm="12" xl="3"></CCol>
// //           <CCol sm="12" xl="6">
// //             <CCard>
// //               <CCardHeader align="center">
// //                 000 님이 수강중인 Class 목록입니다.
// //                 <small> </small>
// //               </CCardHeader>
// //               <CCardBody>
// //                 <CListGroup align="center">
// //                   {/* 1. usersData의 이름만이라도 리스트업 해보기
// //                     2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
// //                   {/* {AttendingCourse} */}
// //                   {/* 지금은 생성하기 탭이니까 수강하는 거는 안보이게? */}
// //                 </CListGroup>
// //               </CCardBody>
// //             </CCard>
// //           </CCol>
// //           <CCol sm="12" xl="3"></CCol>
// //         </CRow>
// //       </>
// //     );
// //   }
// // }

// // export default ParticipateListLecture;

// import React, { Component } from "react";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// render() {
//   const { classes } = this.props;
//   return (
//   <div className={classes.root}>
//     <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Material-UI
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="검색하기"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Toolbar>
//       </AppBar>
//   </div>
//   )
// }

import React, { Component } from "react";
import Lecture from "../../../components/Enrollment"; //Lecture 목록 불러오기

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import authHeader from "../../../services/auth-header";
import LectureSearch from "../../../components/LectureSearch";

const styles = (theme) => ({
  root: {
    width: "100%",
    minWidth: 1080,
  },
  paper: {
    marginLeft: 18,
    marginRight: 18,
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: "flex",
    justifyContent: "center",
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class EnrollmentListLecture extends Component {
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
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => {
        this.setState({ lectures: res });
        console.log(this.state.lectures);
      })
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/enrollment", { headers: authHeader() });
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  render() {
    const { classes } = this.props;
    const cellList = ["번호", "수업명", "설정"];
    return (
      <div className={classes.root}>
        <div className={classes.menu}>
          <LectureSearch stateRefresh={this.stateRefresh} />
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
export default withStyles(styles)(EnrollmentListLecture);
