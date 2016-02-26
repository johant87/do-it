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
            <div className="container">
            <div className="col-md-1"></div>
              <div className="col-md-7 box-shadow border-radius">
                      <div className="row">
                        <div className="col-xs-8 col-sm-12  addtask">
                          <form>
                            <div className="form-group">
                              <input type="Task" className="form-control" id="task" placeholder="Add new Todo" />
                            </div>
                          </form>
                        </div>

                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 todo">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value="" />
                           Set up a new git repository
                         </label>
                      </div>
                    </div>
                  </div>
              </div>
            <div className="col-md-1"></div>
        </div>
  </div>
</div>

    );
  }
}

export default ProjectList;
