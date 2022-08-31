import React, { Component } from 'react'
import './TodoList.css'
import TodoListItem from './TodoListItem/TodoListItem'

export default class TodoList extends Component {
    state = { todos: ['fuck', 'aaa'] }
    render() {
        const { todos } = this.state;
        return (
            <div className='todo-list'>
                {todos.map((n, index) => <TodoListItem key={index} itemName={n} />)}
            </div>
        )
    }
}
