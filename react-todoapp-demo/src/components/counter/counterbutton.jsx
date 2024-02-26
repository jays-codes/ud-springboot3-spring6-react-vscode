
import { useState } from 'react'
import './counter.css'
import PropTypes from 'prop-types'

export default function CounterButton({by, parentCounter, totcount}){

    const [count, setCount] = useState(0);

    function counterPlusPlus(){
        setCount(count+by)
        parentCounter(by)
    }

    function decrement(){
        setCount(count-by)
        var byvar = -1 * by
        parentCounter(byvar)
    }

    function counterZero(){
        setCount(0)
        var byvar = -1 * totcount
        parentCounter(byvar)
    }

    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <div><button className="countBtn" onClick={counterPlusPlus}
            >+{by}</button>
            <button className="countBtn" onClick={decrement}
            >-{by}</button>
            <button className="countBtn" onClick={counterZero}
            >reset</button>
            </div>
        </div>
    )

}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}