import React from "react";
import { post } from "axios";
import Lecture from "./Lecture";

class LectureAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lecture_title: "",
      lecture_capacity: "",
      lecutre_PW: "",
      // lecture_private:''
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addLecture().then((response) => {
      console.log(response.data);
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
    formData.append("lecture_PW", this.state.lecture_PW);

    const config = {
      headers: {
        "content-type": "multipart/from-data",
      },
    };
    return post(url, formData, config);
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
        비밀번호:{" "}
        <input
          type="text"
          name="lecture_PW"
          value={this.state.lecture_PW}
          onChange={this.handleValueChange}
        />
        <br />
        <button type="submit">추가하기</button>
      </form>
    );
  }
}

export default LectureAdd;
