import React from "react";
import { post } from "axios";
import Lecture from "./Lecture";
import authHeader from "../services/auth-header";

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

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>수업 추가</h1>
        수업명:{" "}
        <input
          type="text"
          name="lecture_title"
          value={this.state.lecture_title}
          onChange={this.handleValueChange}
        />
        <br />
        수업인원:{" "}
        <input
          type="text"
          name="lecture_capacity"
          value={this.state.lecture_capacity}
          onChange={this.handleValueChange}
        />
        <br />
        수업공개여부:{" "}
        <input
          type="text"
          name="lecture_private"
          value={this.state.lecture_private}
          onChange={this.handleValueChange}
        />
        <br />
        룸(강의)초기 설정:{" "}
        <input
          type="text"
          name="init_mute_authority"
          value={this.state.init_mute_authority}
          onChange={this.handleValueChange}
        />
        <br />
        채팅:{" "}
        <input
          type="text"
          name="init_chat_authority"
          value={this.state.init_chat_authority}
          onChange={this.handleValueChange}
        />
        <br />
        저장:{" "}
        <input
          type="text"
          name="init_save_authority"
          value={this.state.init_save_authority}
          onChange={this.handleValueChange}
        />
        <br />
        알림:{" "}
        <input
          type="text"
          name="init_notification"
          value={this.state.init_notification}
          onChange={this.handleValueChange}
        />
        <br />
        <button type="submit">추가하기</button>
      </form>
    );
  }
}

export default LectureAdd;
