import { createSlice } from '@reduxjs/toolkit';


const accountS = createSlice({
  name: 'account',
  initialState: {
    email: '',
    name: '',
    age: '',
  },
  reducers: {
    set: (state, act) => {
      state.email = act.payload.email;
      state.name = act.payload.name;
      state.age = act.payload.age;
    },
  },
});

export const { set } = accountS.actions;
export default accountS.reducer;
