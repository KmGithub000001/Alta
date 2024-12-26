import { configureStore } from '@reduxjs/toolkit';
import content from './Redux/Content';
import account from './Firebase/account';

const store = configureStore({
  reducer: {
    content: content,
    account: account,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;