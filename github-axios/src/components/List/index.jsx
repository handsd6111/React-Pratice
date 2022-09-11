import React, { Component } from 'react'
import './index.css';

export default class List extends Component {
    render() {
        const { users } = this.props;
        return (
            <div className="list">
                {
                    users.length < 1 ?
                        <h1>找不到資料</h1>
                        :
                        users.map(userItem =>
                            <a href={userItem.html_url} key={userItem.id}>
                                <div className="user-zone" >
                                    <img src={userItem.avatar_url} alt="" />
                                    <div className="user-name">{userItem.login}</div>
                                </div>
                            </a>
                        )
                }
            </div>
        )
    }
}
