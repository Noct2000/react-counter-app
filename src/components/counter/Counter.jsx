import { useState } from 'react';
import CounterButton from './CounterButton'
import ResetButton from './ResetButton';
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0)

    function incrementCounterButtonFunction(by) {
        setCount(count + by);
    }

    function decrementCounterButtonFunction(by) {
        setCount(count - by);
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <CounterButton 
                by={1}
                incrementMethod={incrementCounterButtonFunction}
                decrementMethod={decrementCounterButtonFunction}
            />
            <CounterButton 
                by={2}
                incrementMethod={incrementCounterButtonFunction}
                decrementMethod={decrementCounterButtonFunction}
            />
            <CounterButton 
                by={3}
                incrementMethod={incrementCounterButtonFunction}
                decrementMethod={decrementCounterButtonFunction}
            />
            <ResetButton 
            setCountMethod={setCount}
            />
        </div>
    );
}
