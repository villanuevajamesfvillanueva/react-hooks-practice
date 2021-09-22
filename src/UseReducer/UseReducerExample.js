import { useReducer } from "react";

const UseReducerExample = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {count: state.count + 1, showText: state.showText}
            case 'TOGGLE_SHOWTEXT':
                return {count: state.count, showText: !state.showText}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

    

 
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => {
                dispatch({type: 'INCREMENT'});
                dispatch({type: 'TOGGLE_SHOWTEXT'});
            }}>
                {state.showText && <p>This is a text</p>}
            </button>
        </div>
    )
}

export default UseReducerExample
