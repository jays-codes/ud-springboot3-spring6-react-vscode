import { useState } from 'react'
import './counter.css'
import CounterButton from './counterbutton';

export default function Counter(){
    const [totcount, setCount] = useState(0);

    function parentCounter(by){
        setCount(totcount+by)
    }
    
    function counterZero(){
        var byvar = -1 * totcount
        parentCounter(byvar)
    }

    function decrement(by){
        var byvar = -1 * by
        parentCounter(byvar)
    }

    return(
        <>
        <span className="count">{totcount}</span>    
        <CounterButton by={1} parentCounter={parentCounter} decrement={decrement}/>
        <CounterButton by={5} parentCounter={parentCounter} decrement={decrement}/>
        <CounterButton by={10} parentCounter={parentCounter} decrement={decrement}/>
        <button className="countBtn" onClick={counterZero}
            >reset</button>
        </>
    )
}

