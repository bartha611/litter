const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import api from '../../utils/api';

export const fetchUsers = createAsyncThunk(
  'search/fetchUsers',
  async search => {
    const response = await api.get(`/api/user?search=${search}`);
    return response.data;
  }
);

const initialState = {
  loading: false,
  user: [],
  error: false
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [fetchUsers.rejected]: state => {
      state.loading = false;
      state.error = false;
    },
    [fetchUsers.pending]: state => {
      state.loading = true;
    }
  }
});

export default searchSlice.reducer;
