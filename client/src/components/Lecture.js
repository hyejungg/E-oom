import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import LectureDelete from "./LectureDelete";

class Lecture extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.lecture_num}</TableCell>
        <TableCell>{this.props.lecture_title}</TableCell>
        <TableCell>{this.props.lecture_capacity}</TableCell>
        <TableCell>{this.props.lecture_id}</TableCell>
        <TableCell>
          <LectureDelete
            stateRefresh={this.props.stateRefresh}
            lecture_num={this.props.lecture_num}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default Lecture;
