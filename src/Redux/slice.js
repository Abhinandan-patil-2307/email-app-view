import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'emailStore',
    initialState: [],
    reducers: {
        add(state, action) {
            const items = action.payload;
            items.forEach((item) => {
                item.isFavorite = false;
                item.isRead = false;
            })
            return [...items];
        },
        addFavorite(state, action) {
            state.forEach(item => {
                if (item.id === action.payload) {
                    item.isFavorite = true;
                }
            });
        },
        removeFavorite(state, action) {
            state.forEach(item => {
                if (item.id === action.payload) {
                    item.isFavorite = false;
                }
            });
        },
        addRead(state, action) {
            state.forEach(item => {
                if (item.id === action.payload) {
                    item.isRead = true;
                }
            });
        }
    },
});

export const { add, addFavorite, removeFavorite, addRead } = slice.actions;
export default slice.reducer;