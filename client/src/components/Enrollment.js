import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import EnrollmentDelete from "./EnrollmentDelete";

class Enrollment extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.lecture_num}</TableCell>
        <TableCell>{this.props.lecture_title}</TableCell>
        {/* <TableCell>{this.props.lecture_id}</TableCell> */}
        <TableCell>
          <EnrollmentDelete
            stateRefresh={this.props.stateRefresh}
            lecture_num={this.props.lecture_num}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default Enrollment;
