import React, { Component } from 'react'
import store from '../../redux/store';

export default class Count extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        });
    }

    increment = () => {
        const { value } = this.selectCount;
        store.dispatch({ type: 'increment', data: value });
    }

    decrement = () => {
        const { value } = this.selectCount;
        store.dispatch({ type: 'decrement', data: value });
    }

    incrementIfOdd = () => {
        if (store.getState() % 2 === 0) {
            this.increment();
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
            this.increment();
        }, 2000);
    }


    render() {
        return (
            <div className="count">
                <div className="answer">Count : {store.getState()}</div>
                <br />
                <select ref={c => this.selectCount = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>基數加</button>
                <button onClick={this.incrementAsync}>同步加</button>

            </div>
        )
    }
}
