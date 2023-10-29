import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
    name: "cartFakeFavData",
    initialState: [],
    reducers: {
        addToFav(state, action) {
            state.push(action.payload)
        },
        removeFromFav(state, action) {
            const idToRemove = action.payload.id;
            return state.filter((item) => item.id !== idToRemove);
        }
    }
})

export const { addToFav, removeFromFav } = FavouriteSlice.actions
export default FavouriteSlice.reducer