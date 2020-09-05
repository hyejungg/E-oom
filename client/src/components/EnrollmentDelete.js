import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class EnrollmentDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  //추가버튼 누르면 팝업창
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  //닫기창
  handleClose = () => {
    this.setState({
      open: false, //팝업창이 오픈되지 않은 형태로 되돌림
    });
  };

  deleteEnrollment(lecture_num) {
    const url = "/api/enrollment/" + lecture_num;
    fetch(url, {
      method: "DELETE",
    });
    this.props.stateRefresh();
  }

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          삭제
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle onClose={this.handleClose}>삭제 경고</DialogTitle>
          <DialogContent>
            <Typography>선택한 수업이 삭제됩니다.</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.deleteEnrollment(this.props.lecture_num);
              }}
            >
              삭제
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
    );
  }
}

export default EnrollmentDelete;
