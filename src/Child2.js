import React, {useReducer} from 'react';
import {counterReducer} from './CounterReducer.js';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer,0)

    // console.log(state)

    return(
        <div>
            <h1>This is a Secound Child using Counter Reducer</h1>
            <h1>Value of Reducer  : {state}</h1>
            <button onClick = {
                () =>  dispatch('INCREMENT')
            }>Increment Reducer </button>
            <button onClick={
                () => dispatch('DECREMENT')
            }>
                Decrement Reducer
            </button>
        </div>
    )
}

export default Child2;