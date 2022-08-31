import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <input type="checkbox" />
        <div className="item-all">
          <span className="success">已完成 0</span>
          <span className="slash"> / </span>
          <span className="all">全部 0</span>
        </div>
        <button className='clear-success-task-btn'>清除已完成任務</button>
      </div>
    )
  }
}
