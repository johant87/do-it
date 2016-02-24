import React from 'react';
import jQuery from 'jquery';
// import TaskList from './TaskList';
import ProjectList from './ProjectList';
import './stylesheets/_bootstrap.scss';


class App extends React.Component {

  render() {
      return (
        <div>
          <h1>Projects</h1>
          <ProjectList />
        </div>
      );
    }
}

export default App;
