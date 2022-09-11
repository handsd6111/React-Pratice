import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {

  fuck = (event) => {
    const { setNewTodo } = this.props;
    if (event.keyCode !== 13) return;
    let todoName = event.target.value;
    todoName = todoName.replace(/ /g, "");
    if (todoName.length === 0) return;

    setNewTodo(event.target.value);
    event.target.value = "";

  }

  render() {
    return (
      <div className="header">
        <input key='asdfjklasdjfl;jasdlfkjaslfjal;skj;lkjf9802j908j' onKeyUp={this.fuck} type="text" className='addTaskInput' placeholder='輸入點東西' />
      </div>
    )
  }
}
