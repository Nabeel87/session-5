import React, {useContext} from 'react';
import counterContext from './CounterContext.js';



const Child = () => {


    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>This is a Child</h1>
            <h1>Counter Value is : {counterValue}</h1>
        </div>
    )
}

export default Child;