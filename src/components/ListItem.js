import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

      this.state = {
        isEditing: false
      };
  }

  renderTaskSection() {
    const { isCompleted, task } = this.props;
    const taskStyle = {
      'textDecoration': this.props.completed ? 'lineThrough' : 'none',
      cursor: 'pointer'
    }

    return(
      <td
      style={taskStyle}
      onClick={this.props.toggleTask}
      >
      {task}
      </td>
    );
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <input type="text" ref="editInput" defaultValue={this.props.task} />
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    } else {
      return (
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button onClick={this.deleteTask.bind(this)}>Delete</button>
        </td>
      )
    }
  }

  onEditClick() {
    this.setState({ isEditing: true })
  }

  onCancelClick() {
    this.setState({ isEditing: false })
  }

  onSaveClick(e) {
    e.preventDefault();
    let editedTask = this.refs.editInput.value;
    this.props.editTask(this.props.task, editedTask)

    this.setState({ isEditing: false })
  }

  deleteTask(todo) {
    this.state.task = '';
    this.setState({ isEditing: false });
  }

  render() {
    return(
      <div>
        <tr>
          {this.renderTaskSection()}
          {this.renderActionsSection()}
        </tr>
      </div>
    );
  }
}

export default ListItem;
