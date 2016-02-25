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
      <div className="projects">
        <div className="profile">
          <img src="https://static-2.springest.com/uploads/user/profile/avatar/1/big_wouter-de-vos-8d4012611e7bab67dd1e84297687e9e1.png" className="avatar"/>
            <h3>Wouter de Vos</h3>
              <div className="tasksleft">
                  3
                </div>
                <div className="tasksleft">
                  6
                </div>
        </div>
        <div className="clearfix"></div>
          <div className="projectlist">
          <ProjectForm onChange={this.showProjects.bind(this)} />
          <h2>Projects</h2>
          <div className="projectlistitem">
            {this.state.projects.map(function(project, i) {
              return(
                <ProjectItem onChange={this.showProjects.bind(this)} key={project.id} id={project.id} title={project.title} finished={project.finished} />
                );
              }, this)}
          </div>

            </div>
        </div>
      </div>
    );
  }
}

export default ProjectList;
