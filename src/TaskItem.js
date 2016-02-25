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
      })

	    .fail(function(error) {
	        console.log(error);
	    });
  }




  render() {
    return(
      <li>{this.props.title}
                <button onClick=
                {this.toggleTaskStatus.bind(this)}>
                 {this.state.finished ? "click here if not done" : "click here if its done"}
             </button>
                </li>
    );
  }
}

export default TaskItem;