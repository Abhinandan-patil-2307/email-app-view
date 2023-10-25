import { createSlice } from '@reduxjs/toolkit';

const splitInfo = createSlice({
    name: 'splitInfo',
    initialState: {
        split: false,
    },

    reducers: {
        openSplit(state, action) {

            if (action.payload === 'close') {
                return { split: false }
            }

            if (typeof action.payload === 'object') {
                return { split: true, ...action.payload }
            }
        },
        updateSplit(state, action) {

            return { ...state, ...action.payload }

        },
    },
});

export const { openSplit, updateSplit } = splitInfo.actions;
export default splitInfo.reducer;