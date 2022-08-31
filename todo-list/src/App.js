import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <div className='app-container'>
                    <Header />
                    <TodoList />
                    <Footer />
                </div>
            </div>
        )
    }
}
