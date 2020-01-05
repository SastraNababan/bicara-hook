import React, { Component } from 'react';
export default class SubscribeBox extends Component {
  state = {
    subscribe: false,
    like: 0,
    dislike: 0
  };

  handleSubscribe = () => {
    this.setState({
      subscribe: !this.state.subscribe
    });
  };

  handleLike = () => {
    // this.setState({
    //   like: this.state.like + 1
    // })
    
  // setState are asynchronous - don’t rely on this.state to reflect the new 
  // value immediately after calling setState 
  //  Pass an updater function instead of an object

    this.setState(currentState => ({
      like: currentState.like + 1
    }));
  };

  // handleLikeTripple = () => {
  //   this.handleLike();
  //   this.handleLike();
  //   this.handleLike();
  // }

  handleDislike = () => {
    this.setState(state => ({
      dislike: state.dislike + 1
    }));
  };

  render() {
    return (
      <div>
        <p>
          <button onClick={this.handleSubscribe}>
            {this.state.subscribe ? "Subscribe" : "Unsubscribe"}
          </button>
        </p>
        <p>
          <button onClick={this.handleLike}> Like </button>
          <span> {this.state.like}</span>
        </p>
        {/* <p>
          <button onClick={this.handleLikeTripple}> Like 3x </button>
          <span> {this.state.like}</span>
        </p> */}
        <p>
          <button onClick={this.handleDislike}> Dislike </button>
          <span>{this.state.dislike}</span>
        </p>
      </div>
    );
  }
}
