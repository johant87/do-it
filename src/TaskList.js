import React from 'react';
import jQuery from 'jquery';
import TaskItem from 'TaskItem';
import TaskForm from 'TaskForm';

class TaskList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  showTasks(event) {
    let projectId = this.props.getProjectId();
    let component = this;

    jQuery.getJSON(`https://dry-shelf-45398.herokuapp.com/projects/${projectId}.json`, function(data) {
      console.log(data);

      component.setState({
        tasks: data.tasks
      });
    });
  }

  componentDidMount() {
    this.showtasks();
  }

  render() {
    return (
      <div>
        <TaskForm onChange={this.showTasks.bind(this)} projectId={this.props.getprojectId()} />
        <ul>
          {this.state.tasks.map(function(todo, i) {
            return(
              <TaskItem key={task.id} id={task.id} title={task.title} finished={task.finished} projectId={task.project_id}  onChange={this.showtasks.bind(this)} />
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default TaskList;
