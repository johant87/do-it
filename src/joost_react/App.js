import React from 'react';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: "there are no scores.",
      players: ["joost", "chiel", "matt", "Piet", "Ada"]
    };
  }
onScoreChanged(name, score){
  this.setState({
    message: name + " scored, and now has " + score
  });
}
renderPlayer(player){
  return <Player name={player} onChange={this.onScoreChanged.bind(this)} />;
}
onAddPlayer(playername){
  var currentPlayers = this.state.players;
  var newPlayers = currentPlayers.concat(playername);
  this.setState({
    players: newPlayers
  });
}
    render() {
        return (
          <div>
            <h1>Hello World!</h1>
            <table>
              <tbody>
                {this.state.players.map(this.renderPlayer.bind(this))}
              </tbody>
            </table>
            {this.state.message}
            <AddPlayerForm onSubmit={this.onAddPlayer.bind(this)}/>
          </div>
        );
    }
}
export default App;
