import React from 'react';
import jQuery from 'jquery';
import ProjectItem from './ProjectItem';
import ProjectForm from './ProjectForm';

class ProjectList extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: []
    };
  }

  showProjects(event) {
    let component = this;

    jQuery.getJSON("https://dry-shelf-45398.herokuapp.com/projects.json", function(data){
      component.setState({
        projects: data.projects
      });
      console.log(data.projects);
    });

  }

  componentDidMount() {
    this.showProjects();
  }

  render() {
    return (
      <div>
      <ul>
      {this.state.projects.map(function(project, i) {
        return(
          <ProjectItem onChange={this.showProjects.bind(this)} key={project.id} id={project.id} title={project.title} finished={project.finished} />
          );
        }, this)}
        <ProjectForm onChange={this.showProjects.bind(this)} />
        </ul>
      </div>
    );
  }
}

export default ProjectList;
