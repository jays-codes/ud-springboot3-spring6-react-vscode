import './counter.css'
export default function Counter(){



    function counterPlusPlus(){
        console.log('counterPlusPlus clicked')
    }

    return(
        <div className="Counter">
            <span className="count">0</span>
            <div><button className="countBtn" onClick={counterPlusPlus}
            >+1</button>
            </div>
        </div>
    )
}