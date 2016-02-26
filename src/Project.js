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

  updateProject(event) {
      console.log("doing something")
      let projectId = this.props.params.projectId;
      let component = this;
          let oldState = {
              id: this.state.id,
              title: this.state.title,
              finished: this.state.finished
          }
          this.state.finished = true;
      console.log("changing state!");
          let changedState = {
              finished: this.state.finished
          }
          let newState = jQuery.extend(oldState, changedState);
          this.setState(newState);
          jQuery.ajax({
              type: "PUT",
              url: "https://dry-shelf-45398.herokuapp.com/projects/" + projectId + ".json",
              data: JSON.stringify({
                  project: newState
              }),
              contentType: "application/json",
              dataType: "json"
          })
          .done(function(data) {
          console.log(data);
          component.setState({
            id: data.project.id,
            title: data.project.title,
            finished: data.project.finished
          });
        })
          .fail(function(error) {
              console.log(error);
          });
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
        <TaskList projectdone={this.state.project.finished}
        projectFinished={this.updateProject} projectId={this.props.params.projectId} />
      </div>
    );
  }
}

export default Project;
