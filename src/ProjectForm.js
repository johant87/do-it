import React from 'react';
import jQuery from 'jquery';

class ProjectForm extends React.Component {
  constructor(){
    super();
  }

  createProject(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.project.value;
    let newProject = {
      id: null,
      title: title,
      finished: false
    };
    jQuery.ajax({
      type: "POST",
      url: "https://dry-shelf-45398.herokuapp.com/projects.json",
      data: JSON.stringify({
          project: newProject
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.project.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }



  render() {
    return (
      <form onSubmit={this.createProject.bind(this)}>
        <input type="text" ref="project" placeholder="Create your project here!" />
          <button type="submit">Add Project</button>
      </form>
    );
  }
}

export default ProjectForm;
