import { useState } from 'react'
import './counter.css'
import PropTypes from 'prop-types'

export default function Counter({property}){

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
        setCount(count+property)
        console.log(count)
        console.log('counterPlusPlus clicked')
    }

    function decrement(){
        setCount(count-property)
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
            >+{property}</button>
            <button className="countBtn" onClick={decrement}
            >-{property}</button>
            <button className="countBtn" onClick={counterZero}
            >reset</button>
            </div>
        </div>
    )

}

Counter.propTypes = {
    property: PropTypes.number
}

Counter.defaultProps = {
    property: 1
}
