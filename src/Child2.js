import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer.js';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 10)

    console.log(state)

    return(
        <div>
            <h1>Value of Reducer : {state}</h1>
            <button onClick = {
                () =>  dispatch('INCREMENT')
            }>Increment Reducer </button>
        </div>
    )
}

export default Child2;