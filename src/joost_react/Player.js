import React from 'react';
class Player extends React.Component {
  constructor(){
    super();
    this.state = {
      score: 0,
    };
  }
  checkWinner() {
      if (this.state.score >=10){
        return  "you have won"
      };
    };
  plusOne(event){
    event.preventDefault();
    var newState = {
      score: this.state.score + 1
    };
    this.setState(newState);
    this.props.onChange(this.props.name, newState.score);
  }
  render(){
return (
  <tr>
    <td>{this.props.name}</td>
    <td>{this.state.score}</td>
    <td>
      <button onClick={this.plusOne.bind(this)}>
      +1
      </button>
          </td>
          <td>{this.checkWinner()}</td>
  </tr>
);
  }
}
export default Player;
