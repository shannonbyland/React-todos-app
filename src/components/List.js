import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  renderItems() {
    const props = this.todos;
    let tasks = this.props.todos;
    return tasks.map((todo, index) => <ListItem key={index} {...todo} editTask={this.props.editTask} {...props} /> );
  }

  render() {
    return(
      <div>
        <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      </div>
    );
  }
}


export default List;
