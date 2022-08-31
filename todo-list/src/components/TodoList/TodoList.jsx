import React, { Component } from 'react'
import './TodoList.css'
import TodoListItem from './TodoListItem/TodoListItem'

export default class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (
            <div className='todo-list'>
                {
                    todos.map(todoItem =>
                        <TodoListItem key={todoItem.id}
                            todoItem={todoItem}
                            setTodoDone={this.props.setTodoDone}
                            deleteTodo={this.props.deleteTodo}
                        />
                    )
                }
            </div>
        )
    }
}
