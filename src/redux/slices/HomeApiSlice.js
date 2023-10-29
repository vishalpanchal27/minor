import { createSlice } from "@reduxjs/toolkit";

const HomeApiSlice = createSlice({
    name: 'productData',
    initialState: {
        data: [],
        loading: false,
        error: null,
        category: "4vpab",
        categoryData: [],
        onHover: 'none',
    },
    reducers: {
        fetchStart(state) {
            state.loading = true;
        },
        fetchFulfilled(state, action) {
            state.loading = false;
            state.data = action.payload
            state.error = action.payload
        },
        fetchFailure(state, action) {
            state.loading = true
            state.data = []
            state.error = action.payload
        },

        fetchCategoryStart(state) {
            state.loading = true;
        },
        fetchCategoryFulfilled(state, action) {
            state.loading = false;
            state.categoryData = action.payload
            state.error = action.payload
        },
        fetchCategoryFailure(state, action) {
            state.loading = true
            state.categoryData = []
            state.error = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        setOnHover(state, action) {
            state.onHover = action.payload;
        }

    }

})

export const { fetchFailure,
    fetchFulfilled,
    fetchStart,
    fetchCategoryFailure,
    fetchCategoryStart,
    fetchCategoryFulfilled,
    setCategory,
    setOnHover
} = HomeApiSlice.actions
export default HomeApiSlice.reducer