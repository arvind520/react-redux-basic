import React, { Component } from 'react'
import { decrement, increment } from '../../Store/actions/counterActions';
import { store } from '../../Store/store'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.updateState = this.updateState.bind(this);
        this.state = { counter: 0 }
    }
    componentDidMount(){
        store.subscribe(() => this.updateState())
    }

    updateState(){
        const state = store.getState();
        this.setState({
            counter: state.counter,
        })
    }

    onIncrement(){
        store.dispatch(increment());
    }
    onDecrement(){
        store.dispatch(decrement());
    }

    render() {
        const {counter} = this.state;
        return (
        <div>
            <div><strong>Counter: </strong> <span>{counter}</span></div> 
            <button onClick={this.onIncrement}>Increment</button> <button onClick={this.onDecrement}>Decrement</button>
        </div>
        )
    }
}
