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

class LectureSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
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
      keyword: "",
      open: false, //추가 뒤 팝업창 닫히도록
    });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
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
      keyword: "",
      open: false, //팝업창이 오픈되지 않은 형태로 되돌림
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          수업 검색하기
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>수업 검색하기</DialogTitle>
          <DialogContent>
            <input
              placeholder="수업 ID 를 입력하세요."
              type="text"
              name="keyword"
              value={this.state.keyword}
              onChange={this.handleValueChange}
            />
            <br />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleFormSubmit}
            >
              신청
            </Button>
            <Button variant="outlined" onClick={this.handleClose}>
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LectureSearch;
