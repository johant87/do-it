import React from 'react';
import TaskList from './TaskList';
import jQuery from 'jquery';

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {}
    };
  }

  getProjectId(){
    return this.props.params.projectId;
  }

  componentDidMount() {
    this.fetchProject();
  }

  fetchProject() {

    let component = this;
    let projectId = component.getProjectId();

    jQuery.getJSON(" https://dry-shelf-45398.herokuapp.com/" + projectId + ".json", function(data) {
      console.log(data);

      component.setState({
        project: data.project
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <TaskList projectId={this.getProjectId()} />
      </div>
    );
  }
}

export default Project;
