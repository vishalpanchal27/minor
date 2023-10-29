
const { createSlice } = require("@reduxjs/toolkit");

const SearchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        loading: false,
        error: null,
        search: 'shoes'
    },
    reducers: {
        fetchSearchStart(state, action) {
            state.loading = true;
        },
        fetchSearchSuccessfully(state, action) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchSearchFailure(state, action) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        search(state, action) {
            state.search = action.payload;
            console.log(action.payload);
        }

    }
})
export const { fetchSearchFailure, fetchSearchStart, fetchSearchSuccessfully, search } = SearchSlice.actions
export default SearchSlice.reducer