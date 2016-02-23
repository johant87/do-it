import React from 'react';
// import jQuery from 'jquery';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: ["Do something", "Right now!", "DO IT!"]
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
  
  //
  // onAddTask(taskname){
  //   var currentTasks = this.state.tasks;
  //   var newTasks = currentTasks.concat(taskname);
  //   this.setState({
  //     tasks: newTasks
  //   });
  // }

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

export default App;
