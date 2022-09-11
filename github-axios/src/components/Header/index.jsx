import './index.css';
import React, { Component } from 'react'
import axios from 'axios';

export default class Header extends Component {
    state = { searchUserName: '' }
    getUsers = (seachKeyword) => {
        return () => {
            let apiUrl = `https://api.github.com/search/users?q=${seachKeyword}`;
            axios.get(apiUrl).then(res => {
                this.props.getUsers(res.data.items);
            })
        }
    }

    handleUserInput = (event) => {
        this.setState({ searchUserName: event.target.value });
    }

    render() {
        return (
            <div className="header">
                <div className="search-zone">
                    <div className="title">Search Github Users</div>
                    <div className="input-zone">
                        <input type="text" onKeyUp={this.handleUserInput} placeholder='enter the name who you want search' />
                        <button type="submit" onClick={this.getUsers(this.state.searchUserName)}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
