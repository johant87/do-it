import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: []
    };
  }

  componentDidMount(){
      // the jQuery.get callback will create a new context (this), so we need to remember what 'this'
      var self = this;
      jQuery.getJSON("https:www.dry-shelf-45398.herokuapp.com/tasks", function(data){
          self.setState({
              tasks: data.tasks
          });
      });
  }

  renderTask(title) {
    return <Task title={title} /> ;
  }

  onAddTask(task){
    var newTask = {title: task}
    var newTasks = this.state.tasks.concat(newTask);
    this.setState({
      tasks: newTasks
    });
    this.saveData(newTasks);
  }

  saveData(tasks){
      jQuery.ajax({
          type: "POST",
          url: "https:www.dry-shelf-45398.herokuapp.com/tasks",
          data: JSON.stringify({
              tasks: tasks
          }),
          contentType: "application/json",
          dataType: "json"
      });
  }

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
