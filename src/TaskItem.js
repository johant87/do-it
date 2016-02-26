import React from 'react';
import jQuery from 'jquery';

class TaskItem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      finished: this.props.finished
    });
  }

  toggleTaskStatus(event) {
    let projectId = this.props.projectId
    let component = this;



		let oldState = {
	     	id: this.state.id,
	     	title: this.state.title,
	     	finished: this.state.finished
	    }


		this.state.finished = !this.state.finished;


		let changedState = {
	     	finished: this.state.finished
	    }


		let newState = jQuery.extend(oldState, changedState);

	    this.setState(newState);
      let id = this.props.id

	    jQuery.ajax({
	      	type: "PUT",
	      	url: "https://dry-shelf-45398.herokuapp.com/projects/" + projectId + "/tasks/" + id + ".json",
	      	data: JSON.stringify({
	          	task: newState
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	    })

	    .done(function(data) {
        console.log(data);

        component.setState({
          id: data.task.id,
          title: data.task.title,
          finished: data.task.finished
        });
        component.props.onChange();
        component.props.checkFinished();
      })

	    .fail(function(error) {
	        console.log(error);
	    });
  }




  render() {
    return(

    <div className="tasks-wrapper">
      <ul className="task-item">
      <li>
            <p>
              <label className= "slide">
              <input className="slide-input" id={this.state.id} type="checkbox" ref="finished" checked={this.state.finished ? "finished" : ""} onChange={this.toggleTaskStatus.bind(this)} />
              <span className="slide-knop"></span>{this.props.title}</label>
            </p>
          </li>
      </ul>
    </div>
    );
  }
}







export default TaskItem;
