const { createSlice } = require("@reduxjs/toolkit");


const ProductSlice = createSlice({
    name: 'productData',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchStart(state, action) {
            state.loading = true;
        },
        fetchSuccessfully(state, action) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchFailure(state, action) {
            state.loading = false;
            state.data = null;
            state.error = action.payload
        }

    }
})

export const { fetchFailure, fetchStart, fetchSuccessfully } = ProductSlice.actions
export const apiData = state => state.products;
export default ProductSlice.reducer