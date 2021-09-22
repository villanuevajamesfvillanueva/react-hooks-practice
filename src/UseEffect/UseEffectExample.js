import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectExample = () => {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setData(response.data[0].email);
                console.log('API WAS CALLED')
            }, [count]);
    });

    return (
        <div>
            {data}
            <button onClick={() => {
                setCount(count + 1);
            }}>
                {count}
            </button>
        </div>
    )
}

export default UseEffectExample
