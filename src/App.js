import React from 'react';
import ReactDOM from 'react-dom';

const center = {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  height: '100vh'
}


export default class  App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  goUp = () => {
    this.setState({counter: this.state.counter + 1})
  } 

  goDown = () => {
    this.setState({counter: this.state.counter - 1})
  }   

  render() {
    return (
      <div style={center}>
        <button onClick={() => this.goUp()}>+</button>
        {this.state.counter}
         <button onClick={() => this.goDown()}>-</button>
      </div>
    )
  }
};
