import React from 'react';
class AddPlayerForm extends React.Component {
onSubmitForm(event){
  event.preventDefault();
  this.props.onSubmit(this.refs.playerName.value);
}
  render() {
    return (
      <form onSubmit={ this.onSubmitForm.bind(this) }>
        <label>New Player:</label>
        <input ref="playerName" />
        <button>Add</button>
       </form>
     );
  }
}
export default AddPlayerForm;
