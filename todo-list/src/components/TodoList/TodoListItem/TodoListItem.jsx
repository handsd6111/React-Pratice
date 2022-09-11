import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {
    state = { showDeleteBtn: false }

    hasTodoDone = (id) => {
        return (event) => {
            // console.log(id, event.target.checked);
            this.props.setTodoDone(id, event.target.checked);
        }
    }

    render() {
        const { todoItem, deleteTodo } = this.props;
        const { showDeleteBtn } = this.state;
        return (
            <div className="todo-list-item"
                onMouseOver={() => { this.setState({ showDeleteBtn: true }) }}
                onMouseOut={() => { this.setState({ showDeleteBtn: false }) }}
            >
                <input type="checkbox" checked={todoItem.done} onChange={this.hasTodoDone(todoItem.id)} />
                <div className="item-name">
                    <span>{todoItem.id}. </span>
                    {todoItem.name}
                </div>
                {showDeleteBtn && <button onClick={() => { deleteTodo(todoItem.id) }} className="delete-btn">刪除</button>}
                {/* {showDeleteBtn ? <button className="delete-btn">刪除</button> : <></>} */}
            </div>
        )
    }
}
