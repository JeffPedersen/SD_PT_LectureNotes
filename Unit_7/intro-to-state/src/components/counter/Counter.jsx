
import "./Counter.css"

export default function Counter({count, setCount}) {

    // two functions to add and subtract
    function decreaseNum() {
        // An example of how to use prevState w/ prevCount
        setCount(prevCount => prevCount -1)

    //     setCount(count -1)
    };
    function increaseNum() {
        // setCount(count +1)
        setCount(prevCount => prevCount +1)
    };
    
    return(
        <div className="counter">
            <button onClick={decreaseNum}>-</button>
            <span>Number is {count}</span>
            <button onClick={increaseNum}>+</button>
        </div>
        
    ) 
};



