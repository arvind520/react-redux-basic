import React, { useEffect, useState } from 'react'
import { decrement, increment } from '../../Store/actions/counterActions';
import { store } from '../../Store/store';

function FunctionCounter() {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        store.subscribe(() => setCounter(store.getState().counter))
    },[])

    
    function onIncrement(){
        store.dispatch(increment());
    }

    function onDecrement(){
        store.dispatch(decrement());
    }

  return (
    <div>
        <div>
            <div><strong>Counter: </strong> <span>{counter}</span></div> 
            <button onClick={onIncrement}>Increment</button> <button onClick={onDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default FunctionCounter