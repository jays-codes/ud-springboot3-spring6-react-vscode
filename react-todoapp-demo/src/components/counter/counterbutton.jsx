
import './counter.css'
import PropTypes from 'prop-types'

export default function CounterButton({by, parentCounter, decrement}){

    return(
        <div className="Counter">
            <div><button className="countBtn" onClick={() => parentCounter(by)}
            >+{by}</button>
            <button className="countBtn" onClick={() => decrement(by)}
            >-{by}</button>
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