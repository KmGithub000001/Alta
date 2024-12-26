import { createSlice } from '@reduxjs/toolkit';
const content = createSlice({
  name: 'content',
  initialState: {
    val: 'Redux Example',
  },
  reducers: {
    change: (state, act) => {
      state.val = act.payload.val;
    },
  },
});
export const { change } = content.actions;
export default content.reducer;