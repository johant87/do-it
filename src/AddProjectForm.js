import React from 'react';

class AddProjectForm extends React.Component {
  constructor(){
    super();
    this.state = {
      projects: []
    };
  }

  // onSubmit(event){
  //     event.preventDefault();
  //     this.props.onSubmit(this.refs.project.value);
  // }

  onAddProject(event){
    event.preventDefault();
    let component =  this;
    let title = this.refs.project.value;
    let newProject = {
      id: null,
      title: title,
    };
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

  render(){
    return (
      <form onSubmit={this.onAddProject.bind(this)}>
      <input ref="project" />
      <button>Add project </button>
      </form>
    );
  }


}

export default AddProjectForm;
