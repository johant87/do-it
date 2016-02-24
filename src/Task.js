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
        status: "done"
      });
    }

    showStatus(){
      return ("dit werkt")
      // if (status === false){
      //   return("ok, this task is done")
      // }    //i.p.v. status is 'done' een betere naam
      // else{
      //   return("done?")
      // }
    }

    render() {
        return (

                <li>{this.props.title}
                <button onClick=
                {this.changeStatus.bind(this)}>
                  {this.showStatus}
                        //Next, I want to use the function 'showStatus' above that shows the correct status.
                </button>
                </li>
        );
    }

}

export default Task;
