import React from 'react';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';

class ProjectItem extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      finished: this.props.finished
    });
  }

  // getOldState(){
  //   let oldState = {
	//      	id: this.state.id,
	//      	title: this.state.title,
	//      	finished: this.state.finished
  //   };
  //   return oldState;
  // }

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
	      	url: "https://dry-shelf-45398.herokuapp.com/projects/" + this.props.id + ".json",
	      	data: JSON.stringify({
	          	project: newState
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	    })

	    .done(function(data) {
        console.log(data);

        component.setState({
          id: data.project.id,
          title: data.project.title,
          finished: data.project.finished
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

    jQuery.ajax({
      type: "DELETE",
      url: "https://dry-shelf-45398.herokuapp.com/projects/" +  this.props.id + ".json",
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
    console.log(this.state.title)
    return(
        <div>
          <a href="#" className="destroy pull-right" onClick={this.deleteItem.bind(this)}>x</a>
          <h4>
            <Link to={`/projects/${this.state.id}`}> {this.state.title} </Link>
            <button onClick={this.toggleStatus.bind(this)}>
              {this.state.finished ? "click here if not done" : "click here if its done"}
            </button>
          </h4>
        </div>
    );
  }
}

export default ProjectItem;
