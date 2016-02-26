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

  deleteItem(event) {
    event.preventDefault();
    console.log("Destroy clicked!");

    let component = this;
    let id = this.props.id
    let projectId = this.props.projectId

    jQuery.ajax({
      type: "DELETE",
      url: "https://dry-shelf-45398.herokuapp.com/projects/" + projectId + "/tasks/" + id + ".json",
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        console.log(data);
        console.log("Deleted! :)");
      })

      .fail(function(error) {
        console.log(error);
      })

      .always(function() {
        component.props.onDestroy();
      });
  }


  render() {
    return(
      <div>
        <a href="#" className="destroy pull-right" onClick={this.deleteItem.bind(this)}>x</a>
        <li>{this.props.title}
              <button onClick= {this.toggleTaskStatus.bind(this)}>
                   {this.state.finished ? "click here if not done" : "click here if its done"}
               </button>
        </li>
      </div>
    );
  }
}

export default TaskItem;
