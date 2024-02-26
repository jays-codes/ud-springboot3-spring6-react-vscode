import { useState } from 'react'
import './counter.css'
import CounterButton from './counterbutton';

export default function Counter(){
    const [totcount, setCount] = useState(0);

    function parentCounter(by){
        setCount(totcount+by)
    }

    return(
        <>
        <span className="count">{totcount}</span>    
        <CounterButton by={1} parentCounter={parentCounter} totcount={totcount}/>
        <CounterButton by={5} parentCounter={parentCounter} totcount={totcount}/>
        <CounterButton by={10} parentCounter={parentCounter} totcount={totcount}/>
        </>
    )
}

