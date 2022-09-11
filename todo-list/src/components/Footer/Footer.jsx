import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {

  allTodoDone = (event) => {
    this.props.setAllTodoDone(event.target.checked);
  }

  render() {
    const { todos, deleteDoneTodo } = this.props;
    const doneTodos = todos.filter(todo => todo.done === true);
    return (
      <div className="footer">
        <input type="checkbox" onChange={this.allTodoDone} checked={todos.length === doneTodos.length && todos.length > 0} />
        <div className="item-all">
          <span className="success">已完成 {doneTodos.length}</span>
          <span className="slash"> / </span>
          <span className="all">全部 {todos.length}</span>
        </div>
        <button className='clear-success-task-btn' onClick={deleteDoneTodo}>清除已完成任務</button>
      </div>
    )
  }
}
