import React from 'react';
import TaskList from './TaskList';
import jQuery from 'jquery';
import { Link } from 'react-router';

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

  deleteItem(event) {
    console.log("Destroy clicked!");

    let component = this;

    jQuery.ajax({
      type: "DELETE",
      url: "https://dry-shelf-45398.herokuapp.com/projects/" +  this.props.params.projectId + ".json",
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        console.log(data);
        console.log("Deleted! :)");
      })

      .fail(function(error) {
        console.log(error);
      })

  }


  render() {
    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <Link to={`/`} className="delete project" onClick={this.deleteItem.bind(this)}>x</Link>
        <TaskList projectId={this.props.params.projectId} />
      </div>
    );
  }
}

export default Project;
