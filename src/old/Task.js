import React from 'react';

class Task extends React.Component {
    constructor(){
        super();
        this.state = {
          title: "test"
        };
    }


    changeStatus(event){
      this.setState({
        title: "done"
      });
    }


    render() {
        return (

                <li>{this.props.title}
                <button onClick=
                {this.changeStatus.bind(this)}>
                task done
                </button>
                </li>
        );
    }

}

export default Task;
