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
      let self = this;
      jQuery.getJSON("https://dry-shelf-45398.herokuapp.com/projects.json", function(data){
          self.setState({
              projects: data.projects

          });

      });
  }

  renderProject(project) {
    console.log(project.tasks);
    // this.state.project.tasks.map(this.renderTask.bind(this))
    return <Project key={project.id} id={project.id} title={project.title} finished={project.finished} /> ;
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
