import React from "react";
import { post } from "axios";
import Lecture from "./Lecture";
import authHeader from "../services/auth-header";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  hidden: {
    display: "none",
  },
});

class LectureAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lecture_title: "",
      lecture_capacity: "",
      lecture_private: "",
      init_mute_authority: "",
      init_chat_authority: "",
      init_save_authority: "",
      init_notification: "",
      open: false,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addLecture().then((response) => {
      console.log(response.data);
      this.props.stateRefresh();
    });
    this.setState({
      lecture_title: "",
      lecture_capacity: "",
      lecture_private: "",
      init_mute_authority: "",
      init_chat_authority: "",
      init_save_authority: "",
      init_notification: "",
      open: false, //추가 뒤 팝업창 닫히도록
    });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addLecture = () => {
    const url = "/api/lecture";
    const formData = new FormData();
    formData.append("lecture_title", this.state.lecture_title);
    formData.append("lecture_capacity", this.state.lecture_capacity);
    formData.append("lecture_private", this.state.lecture_private);
    formData.append("init_mute_authority", this.state.init_mute_authority);
    formData.append("init_chat_authority", this.state.init_chat_authority);
    formData.append("init_save_authority", this.state.init_save_authority);
    formData.append("init_notification", this.state.init_notification);

    // const config = {
    //   headers: {
    //     "content-type": "multipart/from-data",
    //   },
    // };
    return post(url, formData);
  };

  //추가버튼 누르면 팝업창
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  //닫기창
  handleClose = () => {
    this.setState({
      lecture_title: "",
      lecture_capacity: "",
      lecture_private: "",
      init_mute_authority: "",
      init_chat_authority: "",
      init_save_authority: "",
      init_notification: "",
      open: false, //팝업창이 오픈되지 않은 형태로 되돌림
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          수업 생성하기
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>수업 추가</DialogTitle>
          <DialogContent>
            <TextField
              label="수업명"
              type="text"
              name="lecture_title"
              value={this.state.lecture_title}
              onChange={this.handleValueChange}
            />
            <br />

            <TextField
              label="최대 인원"
              type="text"
              name="lecture_capacity"
              value={this.state.lecture_capacity}
              onChange={this.handleValueChange}
            />
            <br />

            <TextField
              label="공개여부"
              type="text"
              name="lecture_private"
              value={this.state.lecture_private}
              onChange={this.handleValueChange}
            />
            <br />

            <TextField
              label="초기설정"
              type="text"
              name="init_mute_authority"
              value={this.state.init_mute_authority}
              onChange={this.handleValueChange}
            />
            <br />

            <TextField
              label="채팅"
              type="text"
              name="init_chat_authority"
              value={this.state.init_chat_authority}
              onChange={this.handleValueChange}
            />
            <br />

            <TextField
              label="저장"
              type="text"
              name="init_save_authority"
              value={this.state.init_save_authority}
              onChange={this.handleValueChange}
            />
            <br />

            <TextField
              label="알림"
              type="text"
              name="init_notification"
              value={this.state.init_notification}
              onChange={this.handleValueChange}
            />
            <br />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFormSubmit}
            >
              추가
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      // <form onSubmit={this.handleFormSubmit}>
      //   <h1>수업 추가</h1>
      // 수업명:{" "}
      // <input
      //   type="text"
      //   name="lecture_title"
      //   value={this.state.lecture_title}
      //   onChange={this.handleValueChange}
      // />
      // <br />
      // 수업인원:{" "}
      // <input
      //   type="text"
      //   name="lecture_capacity"
      //   value={this.state.lecture_capacity}
      //   onChange={this.handleValueChange}
      // />
      // <br />
      // 수업공개여부:{" "}
      // <input
      //   type="text"
      //   name="lecture_private"
      //   value={this.state.lecture_private}
      //   onChange={this.handleValueChange}
      // />
      // <br />
      // 룸(강의)초기 설정:{" "}
      // <input
      //   type="text"
      //   name="init_mute_authority"
      //   value={this.state.init_mute_authority}
      //   onChange={this.handleValueChange}
      // />
      // <br />
      // 채팅:{" "}
      // <input
      //   type="text"
      //   name="init_chat_authority"
      //   value={this.state.init_chat_authority}
      //   onChange={this.handleValueChange}
      // />
      // <br />
      // 저장:{" "}
      // <input
      //   type="text"
      //   name="init_save_authority"
      //   value={this.state.init_save_authority}
      //   onChange={this.handleValueChange}
      // />
      // <br />
      // 알림:{" "}
      // <input
      //   type="text"
      //   name="init_notification"
      //   value={this.state.init_notification}
      //   onChange={this.handleValueChange}
      // />
      // <br />
      //   <button type="submit">추가하기</button>
      // </form>
    );
  }
}

export default LectureAdd;
