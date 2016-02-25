import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class TaskList extends React.Component {
  constructor(){
      super();
      this.state = {
          tasks: ["l", "b",]
      };
  }

  renderTask(title) {
    return <Task title={title} /> ;
  }

  onAddTask(task){
    var currentTasks = this.state.tasks;
    var newTasks = currentTasks.concat(task);
    this.setState({
      tasks: newTasks
    });
  }
testwet

render() {
    return (
      <div>
      <ul>
        {this.state.tasks.map(this.renderTask.bind(this))}
      </ul>
            <AddTaskForm onSubmit={this.onAddTask.bind(this)}/>
        </div>
    );
  }

}



export default TaskList;
