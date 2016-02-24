import React from 'react';
import jQuery from 'jquery';
import Project from './Project';
import AddProjectForm from './AddProjectForm';

class ProjectList extends React.Component {
  constructor(){
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount(){
      // the jQuery.get callback will create a new context (this), so we need to remember what 'this'
      var self = this;
      jQuery.getJSON("https://dry-shelf-45398.herokuapp.com/projects.json", function(data){
          self.setState({
              projects: data.projects

          });

      });
  }

  renderProject(project) {
    console.log(project.tasks);
    // this.state.project.tasks.map(this.renderTask.bind(this))
    return <Project title={project.title} /> ;
  }

  onAddProject(project){
    var newProject = {title: project}
    var newProjects = this.state.projects.concat(newProject);
    this.setState({
      projects: newProjects
    });
    this.saveData(newProject);
  }

  saveData(project){
      jQuery.ajax({
          type: "POST",
          url: "https://dry-shelf-45398.herokuapp.com/projects.json",
          data: JSON.stringify({
              project: project
          }),
          contentType: "application/json",
          dataType: "json"
      });
  }

  render() {
      return (
        <div>
        <AddProjectForm onSubmit={this.onAddProject.bind(this)}/>
        <h2>Projects:</h2>
          <ul>
            {this.state.projects.map(this.renderProject.bind(this))}
          </ul>
        </div>
      );
    }
  }

  export default ProjectList;
