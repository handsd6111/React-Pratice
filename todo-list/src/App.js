import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
    state = {
        todos: [
        ]
    }

    setNewTodo = (newTodoName) => {
        const { todos } = this.state;
        const newTodo = { id: todos.length + 1, name: newTodoName, done: false };
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    setTodoDone = (todoId, hasDone) => {
        const { todos } = this.state;
        const newTodos = todos.map(todo => todo.id === todoId ? { ...todo, done: hasDone } : todo);
        this.setState({ todos: newTodos })
    }

    deleteTodo = (todoId) => {
        const { todos } = this.state;
        const newTodos = todos.filter(todo => todo.id !== todoId);
        this.setState({ todos: newTodos });
    }

    setAllTodoDone = (hasDone) => {
        const { todos } = this.state;
        const newTodos = todos.map(todo => ({ ...todo, done: hasDone }));
        this.setState({ todos: newTodos });
    }

    deleteDoneTodo = () => {
        const { todos } = this.state;
        const newTodos = todos.filter(todo => todo.done === false);
        this.setState({ todos: newTodos });
    }

    render() {
        const { todos } = this.state;
        return (
            <div className='app'>
                <div className='app-container'>
                    <Header setNewTodo={this.setNewTodo} />
                    <TodoList todos={todos} setTodoDone={this.setTodoDone} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} setAllTodoDone={this.setAllTodoDone} deleteDoneTodo={this.deleteDoneTodo} />
                </div>
            </div>
        )
    }
}
