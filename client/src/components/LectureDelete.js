import React from "react";

class LectureDelete extends React.Component {
  deleteLecture(lecture_num) {
    const url = "/api/lecture/" + lecture_num;
    fetch(url, {
      method: "DELETE",
    });
    this.props.stateRefresh();
  }

  render() {
    return (
      <button
        onClick={(e) => {
          this.deleteLecture(this.props.lecture_num);
        }}
      >
        삭제
      </button>
    );
  }
}

export default LectureDelete;
