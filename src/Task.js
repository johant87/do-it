import React from 'react';

class Task extends React.Component {
    constructor(){
        super();
        this.state = {
          status: "unfinished",
          title: "test"
        };
    }


    changeStatus(event){
      this.setState({
        status: "finished",
        title: "done"
      });
    }


    render() {
        return (

                <li>{this.state.title}
                <button onClick=
                {this.changeStatus.bind(this)}>
                lol
                </button>
                </li>
        );
    }

}

export default Task;
