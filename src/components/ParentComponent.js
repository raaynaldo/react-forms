import React from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

class ParentComponent extends React.Component {
  state = {
    firstName: "Ray",
    lastName: "Fel",
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state}/>
      </div>
    );
  }
}

export default ParentComponent;
