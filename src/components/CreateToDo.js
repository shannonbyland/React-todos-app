import React, { Component } from 'react';

class CreateToDo extends Component {

  handleCreate(e) {
    e.preventDefault();

    this.props.createTask(this.refs.createInput.value);

    <td>
      <button onClick={this.onEditClick.bind(this)}>Edit</button>
      <button onClick={this.deleteTask.bind(this)}>Delete</button>
    </td>
    this.refs.createInput.value = '';
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleCreate.bind(this)}>
          <input
          type="text"
          placeholder="To Do"
          ref="createInput"
          />
          <button>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateToDo;
