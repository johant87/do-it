import React from 'react';
import jQuery from 'jquery';

class TaskForm extends React.Component {
  constructor() {
    super();
  }

  createTask(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.newTaskInput.value;
    let projectId = this.props.projectId;

    let newTask = {
      id: null,
      title: title,
      finished: false
    };

    jQuery.ajax({
      type: "POST",
      url: "https://dry-shelf-45398.herokuapp.com/projects/" + projectId + "/tasks.json",
      data: JSON.stringify({
          task: newTask
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.newTaskInput.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createTask.bind(this)}>
              <input type="text" ref="newTaskInput" placeholder="create a new task!" />
              <button type="submit">add task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
