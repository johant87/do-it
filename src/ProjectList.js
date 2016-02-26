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

      <div className="container margin-top">
        <div className="row">
          <div className="col-md-4 bg-dark no-gutter box-shadow">


            <div className="projects border-radius">
                  <ProjectForm onChange={this.showProjects.bind(this)} />
                <div className="project-items">
                  <h2 className="margin-top margin-bottom"><span className="glyphicon glyphicon-inbox margin-right"></span> Projects</h2>
                  <p className="margin-bottom">

                    {this.state.projects.map(function(project, i) {
                      return(
                        <ProjectItem onChange={this.showProjects.bind(this)} key={project.id} id={project.id} title={project.title} finished={project.finished} />
                        );
                      }, this)}
                  </p>
                  </div>
            </div>
          </div>


        </div>
  </div>

    );
  }
}

export default ProjectList;
