import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterWithHookSlice';

import './counter-with-hook.css';

export default memo(function CounterWithHook() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div className="counter-with-hook">
            <div>
                <h1>Counter with hook</h1>
                <h2>{count}</h2>

                <button
                    onClick={() => dispatch(decrement())}
                >
                    DEC
                </button>

                <button
                    onClick={() => dispatch(increment())}
                >
                    INC
                </button>
            </div>

            <div>
                <button
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
                </button>
                
                <button
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                    Add Amount
                </button>

                <input
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
            </div>
        </div>
    );
});
