import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Lecture extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.num}</TableCell>
        <TableCell>{this.props.title}</TableCell>
      </TableRow>
    );
  }
}

export default Lecture;
