import { useState } from 'react';

const UseStateExample = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>
                Increment counter
            </button>
        </div>
    );
}

export default UseStateExample;
