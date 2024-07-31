import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTasksStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTasksSuccess(state, action) {
      state.loading = false;
      state.tasks = action.payload;
    },
    fetchTasksFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add other reducers if necessary
  },
});

export const {
  fetchTasksStart,
  fetchTasksSuccess,
  fetchTasksFailure,
  // Export other actions if necessary
} = taskSlice.actions;

export default taskSlice.reducer;
