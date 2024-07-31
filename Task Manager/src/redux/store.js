import { configureStore } from '@reduxjs/toolkit';
import {projectReducer} from './slices/projectSlice';
import {taskReducer} from './slices/taskSlice';
import {userReducer} from './slices/userSlice';

const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    users: userReducer,
  },
});

export default store;
