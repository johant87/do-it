import React from 'react';
import jQuery from 'jquery';
import ProjectList from './ProjectList';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <h1>Pick your Project</h1>
        < ProjectList />
      </div>
      );
  }
}

export default App;
