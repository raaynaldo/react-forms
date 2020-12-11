import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          name="firstName"
          onChange={(event) => this.props.handleFirstNameChange(event)}
          value={this.props.formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={(event) => this.props.handleLastNameChange(event)}
          value={this.props.formData.lastName}
        />
      </form>
    );
  }
}
