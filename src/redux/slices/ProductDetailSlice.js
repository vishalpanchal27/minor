import { createSlice } from "@reduxjs/toolkit";

const ProductDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        data: [],
    },
    reducers: {
        getDetailData(state, action) {
            state.data = action.payload
        },
    }
})

export const { getDetailData } = ProductDetailSlice.actions
export default ProductDetailSlice.reducer