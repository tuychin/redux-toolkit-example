import { configureStore } from '@reduxjs/toolkit';
import counterWithHookSlice from '../src/components/CounterWithHook/counterWithHookSlice';

export default configureStore({
    reducer: {
        counterWithHook: counterWithHookSlice,
    },
});

/**
 * state = {
 *    counterWithHook: {
 *        value,
 *    },
 *    counterWithConnect: {
 *        value,
 *    },
 * }
 */
