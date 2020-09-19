const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  users: [],
  error: false
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    loadSearch(state) {
      state.loading = true;
      state.error = false;
    },
    readSearch(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    errorSearch(state) {
      state.loading = false;
      state.error = true;
    }
  }
});

export const { loadSearch, readSearch, errorSearch } = searchSlice.actions;
export default searchSlice.reducer;
