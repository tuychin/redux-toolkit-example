import {configureStore} from '@reduxjs/toolkit';
import counterWithHookSlice from '../src/components/CounterWithHook/counterWithHookSlice';
import counterWithConnectSlice from '../src/components/CounterWithConnect/counterWithConnectSlice';

const reducer = {
    counterWithHook: counterWithHookSlice,
    counterWithConnect: counterWithConnectSlice,
}

const store = configureStore({
    reducer,
    // customMiddlewareHere,
});

export default store;

/**
 * globalState = {
 *    counterWithHook: {
 *        value,
 *    },
 *    counterWithConnect: {
 *        value,
 *    },
 * }
 */
