import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProjectsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProjectsSuccess(state, action) {
      state.loading = false;
      state.projects = action.payload;
    },
    fetchProjectsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add other reducers if necessary
  },
});

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  // Export other actions if necessary
} = projectSlice.actions;

export default projectSlice.reducer;
