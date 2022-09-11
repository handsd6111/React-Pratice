import logo from './logo.svg';
import Header from './components/Header';
import List from './components/List';
import './App.css';
import React from 'react';

class App extends React.Component {
    state = { users: [] }
    getUsers = (users) => {
        this.setState({ users });
    }

    render() {
        const { users } = this.state;

        return (
            <div className="App" >
                <Header getUsers={this.getUsers}></Header>
                <List users={users}></List>
            </div >
        );
    }

}

export default App;
