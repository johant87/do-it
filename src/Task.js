import React from 'react';

class Task extends React.Component {
    constructor(){
        super();
        this.state = {
          title: "test"
        };
    }

    toggleStatus(event){
           this.setState({
           finished: !this.state.finished
           });
         }

    render() {
        return (

                <li>{this.props.title}
                <button onClick=
                {this.toggleStatus.bind(this)}>
                 {this.state.finished ? "1" : "2"}
             </button>
                </li>
        );
    }

}

export default Task;
