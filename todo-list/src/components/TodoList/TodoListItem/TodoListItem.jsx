import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {
    state = { showDeleteBtn: false }

    render() {
        const { itemName } = this.props;
        const { showDeleteBtn } = this.state;
        return (
            <div className="todo-list-item" onMouseOver={() => { this.setState({ showDeleteBtn: true }) }} onMouseOut={() => { this.setState({ showDeleteBtn: false }) }}>
                <input type="checkbox" />
                <div className="item-name">{itemName}</div>
                {showDeleteBtn && <button className="delete-btn">刪除</button>}
                {/* {showDeleteBtn ? <button className="delete-btn">刪除</button> : <></>} */}
            </div>
        )
    }
}
