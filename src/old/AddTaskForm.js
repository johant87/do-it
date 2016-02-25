import React from 'react';

class AddTaskForm extends React.Component {

  onSubmit(event){
      event.preventDefault();
      this.props.onSubmit(this.refs.task.value);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
      <input ref="task" />
      <button>Add task </button>
      </form>
    );
  }


}

export default AddTaskForm;
