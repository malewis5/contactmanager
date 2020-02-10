import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    status: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({ title: data.title, status: data.completed })
      );
  }
  render() {
    const { title, status } = this.state;
    return (
      <div>
        <h1>{title} </h1>
        <p>{status.toString()}</p>
      </div>
    );
  }
}

export default Test;
