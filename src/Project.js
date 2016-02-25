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
    let projectId = this.props.params.projectId;
    let component = this;


    jQuery.getJSON(" https://dry-shelf-45398.herokuapp.com/projects/" + projectId + ".json", function(data) {
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
        <TaskList projectId={this.props.params.projectId} />
      </div>
    );
  }
}

export default Project;
