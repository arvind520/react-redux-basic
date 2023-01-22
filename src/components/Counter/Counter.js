import React, { Component } from 'react'
import { store } from '../../Store/store'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = { counter: 0 }
    }
    componentDidMount(){
        const state = store.getState();
        console.log(state)
    }
    render() {
        const {counter} = this.state;
        return (
        <div>
            <div><strong>Counter: </strong> <span>{counter}</span></div> 
            <button>Increment</button> <button>Decrement</button>
        </div>
        )
    }
}
