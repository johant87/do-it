import React from 'react';

class AddProjectForm extends React.Component {

  onSubmit(event){
      event.preventDefault();
      this.props.onSubmit(this.refs.project.value);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
      <input ref="project" />
      <button>Add project </button>
      </form>
    );
  }


}

export default AddProjectForm;
