import React, {useContext} from 'react';
import counterContext from './CounterContext.js';



const Child = () => {


    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>This is a first Child using Counter Context</h1>
            <h1>Counter Value is : {counterValue[0]}</h1>

            <button onClick = {
                () => 
                    {counterValue[1](++counterValue[0])}
            }>
                Increment Context
            </button>

        </div>
    )
}

export default Child;