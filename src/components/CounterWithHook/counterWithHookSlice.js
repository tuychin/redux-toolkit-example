import { createSlice } from '@reduxjs/toolkit';

// Reducer
export const counterWithHookSlice = createSlice({
    name: 'counterWithHook',
    initialState: {
        value: 0,
    },

    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Actions
export const { increment, decrement, incrementByAmount } = counterWithHookSlice.actions;

// Thunks
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

// Selectors
// For example: `useSelector((state) => state.counterWithHook.value)`
export const selectCount = state => state.counterWithHook.value;

export default counterWithHookSlice.reducer;
