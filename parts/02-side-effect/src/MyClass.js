import React, { Component } from 'react';

export default class MyClass extends Component {
  
  constructor(props) {
    console.log("-> class constructor");
    super(props);
    this.state = {
      count: 0
    };
    this.handleCount = this.handleCount.bind(this);
  }
  
  render() {
    console.log("-> class render");
 
    return (
      <div>
        <h1> Class Component </h1>
        <p>
          <button onClick={this.handleCount}>Count</button>
          {this.state.count}
        </p>
      </div>
    );
  }

  componentDidMount() {
    // side effect, eg: fetch API
    console.log("-> class componentDidMount");
  }

  componentDidUpdate() {
    console.log("-> class componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("-> class componentWillUnmount");
  }

  handleCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }
}
