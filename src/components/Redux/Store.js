import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './Reducers';

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default store;
