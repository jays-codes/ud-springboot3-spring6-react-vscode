import { useState } from 'react'
import './counter.css'
export default function Counter(){

    /*
    const state = useState(0);

    function counterPlusPlus(){
        state[1](state[0]+1)
        console.log(state[0])
        console.log('counterPlusPlus clicked')
    }
    */

    const [count, setCount] = useState(0);

    function counterPlusPlus(){
        setCount(count+1)
        console.log(count)
        console.log('counterPlusPlus clicked')
    }

    function decrement(){
        setCount(count-1)
        console.log(count)
        console.log('decrement clicked')
    }

    function counterZero(){
        setCount(0)
        console.log(count)
        console.log('reset clicked')
    }


    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <div><button className="countBtn" onClick={counterPlusPlus}
            >+1</button>
            <button className="countBtn" onClick={decrement}
            >-1</button>
            <button className="countBtn" onClick={counterZero}
            >reset</button>
            </div>
        </div>
    )
}