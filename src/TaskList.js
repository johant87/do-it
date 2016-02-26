import React from 'react';
import jQuery from 'jquery';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

class TaskList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      counter: 1
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

  tasksLeft(){
      return this.state.tasks.filter(function(task, i) {
        return task.finished !== true
      });
    }

    checkDone(){
        let component = this;
        if (component.tasksLeft().length === 0 && component.props.projectdone === false){
        component.props.projectFinished();
        };
      }

  componentDidMount() {
    this.showTasks();
  }

  render() {
    return (
      <div>

              <div className="container margin-top">
                  <div className="col-md-1"></div>
                    <div className="col-md-7 border-radius">
                            <div className="row">
                              <div className="col-xs-8 col-sm-12 box-shadow addtask">
                                <TaskForm onChange={this.showTasks.bind(this)} projectId={this.props.projectId} />
                              </div>

                        </div>

                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                            <div className="checkbox">
                              <label>
                                {this.state.tasks.map(function(task, i) {
                                  return(
                                    <TaskItem key={task.id} id={task.id} title={task.title} finished={task.finished} projectId={task.project_id}  onChange={this.showTasks.bind(this)} checkFinished={this.checkDone.bind(this)} onDestroy={this.showTasks.bind(this)} />
                                  );
                                }, this)}
                               </label>
                            </div>
                          </div>
                        </div>
                    </div>
                  <div className="col-md-1"></div>
              </div>
      </div>

    );
  }
}

export default TaskList;
