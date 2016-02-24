import React from 'react';
import jQuery from 'jquery';

class Project extends React.Component {
    constructor(){
        super();
    }

    componentDidMount() {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        body: this.props.body,
        finished: this.props.finished,
        createdAt: this.props.createdAt,
        updatedAt: this.props.updatedAt

      });
    }

    showProject(event){
      event.preventDefault();

    }


    toggleStatus(event){
           this.setState({
           finished: !this.state.finished
           });
           let newState = this.state
           this.updateData(newState)
         }

         updateData(finished){
             jQuery.ajax({
                 type: "PUT",
                 url: "https://dry-shelf-45398.herokuapp.com/projects" + this.props.id + ".json",
                 data: JSON.stringify({
                     project: finished
                 }),
                 contentType: "application/json",
                 dataType: "json"
             });
         }


    render() {
        return (

                <li>{this.props.title}
                <button onClick=
                {this.toggleStatus.bind(this)}>
                 {this.state.completed ? "click here if not done" : "click here if its done"}
             </button>
                </li>
        );
    }

}

export default Project;
