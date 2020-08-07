import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class CheckTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.checkTutorial = this.checkTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  checkTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };
    console.log("checkTutorial() : "+data.title);
    TutorialDataService.check(data.title)
      .then(response => {
        console.log(response);
        console.log(response.data);
        console.log(response.data[0].description);
          // this.setState({
          //   description: response.data[0].description
          // });
          if(response.data[0].description===data.description){
            console.log("true");
          }else{
            console.log("false");
          }
        
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>
  
              <button onClick={this.checkTutorial} className="btn btn-success">
                Check
              </button>
            </div>
          )}
        </div>
      );
  }
}