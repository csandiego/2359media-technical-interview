import {useState, useEffect} from 'react';
import count from '../CounterService';

export default props => {
    const [state, setState] = useState({
        started: false,
        counter: 0,
    });
    useEffect(() => {
        const t = count(state, setState);  
        return () => clearTimeout(t); 
    });
    const reset = () => setState({
        ...state,
        counter: 0
    });
    const start = () => setState({
        ...state,
        started: true
    });
    const pause = () => setState({
        ...state,
        started: false
    });
    return (
    <div>
        <h1>{state.counter}</h1>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
    );
};