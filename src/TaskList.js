import React from 'react';
import jQuery from 'jquery';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

class TaskList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  showTasks(event) {
    let projectId = this.props.projectId;
    let component = this;

    jQuery.getJSON("https://dry-shelf-45398.herokuapp.com/projects/" + projectId + "/tasks", function(data) {
      console.log(data);

      component.setState({
        tasks: data.tasks
      });
    });
  }

  componentDidMount() {
    this.showTasks();
  }

  render() {
    return (
      <div>
        <TaskForm onChange={this.showTasks.bind(this)} projectId={this.props.projectId} />
        <ul>
          {this.state.tasks.map(function(task, i) {
            return(
              <TaskItem key={task.id} id={task.id} title={task.title} finished={task.finished} projectId={task.project_id}  onChange={this.showTasks.bind(this)} />
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default TaskList;
