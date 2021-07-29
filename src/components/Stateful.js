import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    this.state = {
      hello: 'Hola mundo',
    };
  }
  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default Stateful;
