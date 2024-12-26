import { configureStore } from '@reduxjs/toolkit';
import content from './Content';

const store = configureStore({
  reducer: {
    content: content,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;