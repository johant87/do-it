import React from 'react';
import TaskList from './TaskList';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';

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
      <div className="container">
        <div className="row">
            <div className="col-md-2"></div>


              <div className="col-md-8 bg-dark no-gutter box-shadow">
                <div className="projects border-radius">
                    <div className="project-items task-title-remove-padding">
                      <h2 className="margin-top margin-bottom"><span className="margin-right"><Link to="/" href="#"><i className="fa fa-chevron-left"></i></Link></span> {this.state.project.title}</h2>
                      </div>

                </div>
              </div>


            <div className="col-md-2"></div>
        </div>
      </div>
        <TaskList projectdone={this.state.project.finished}
        projectFinished={this.updateProject} projectId={this.props.params.projectId} />
      </div>
    );
  }
}

export default Project;
