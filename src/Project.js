import React from 'react';

class Project extends React.Component {
    constructor(){
        super();
        this.state = {
          title: "Project"
        };
    }


    showProject(event){
      event.preventDefault();

    }

    toggleStatus(event){
           this.setState({
           finished: !this.state.finished
           });
           this.updateData(finished)
         }

         updateData(finished){
             jQuery.ajax({
                 type: "PUT",
                 url: "https://dry-shelf-45398.herokuapp.com/projects.json",
                 data: JSON.stringify({
                     finished: finished
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
