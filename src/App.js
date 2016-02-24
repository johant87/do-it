import React from 'react';
import jQuery from 'jquery';
import TaskList from './TaskList';

class App extends React.Component {

  render() {
      return (
        <div>
          <h1> DO IT!</h1>
          <TaskList />
        </div>
      );
    }
}

export default App;
