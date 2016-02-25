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

  toggleStatus(event) {
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

	    jQuery.ajax({
	      	type: "PUT",
	      	url: "https://dry-shelf-45398.herokuapp.com/projects/${this.props.project_id}/tasks/${this.props.id}.json",
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
      <li className={this.getClassName()}>
        <a href="#" className="destroy pull-right" onClick={this.destroyMe.bind(this)}>x</a>
        <input className="toggle" id={this.state.id} type="checkbox" ref="completed" checked={this.state.completed ? "checked" : ""} onChange={this.toggleChecked.bind(this)} />
        <label for={this.state.id}>
          <EditableTextField value={this.state.title} onChange={this.updateTitle.bind(this)} isEditable={!this.state.completed} />
        </label>
      </li>
    );
  }
}

export default TodoItem;
