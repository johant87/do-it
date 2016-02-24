import React from 'react';

class Task extends React.Component {
    constructor(){
        super();
        this.state = {
          title: "test",
          completed: false
        };
    }


    toggleStatus(event){
      this.setState({
        completed: !this.state.completed
      });
    }

    showSomeText(){
      return("Some text")
    }

    render() {
        return (

                <li>{this.props.title}
                <button onClick=
                {this.toggleStatus.bind(this)}>

                  {this.state.completed ? "Oh not done!" : "Yeah that's done"}

                </button>
                </li>
        );
    }

}
  // {showSomeText}
export default Task;
