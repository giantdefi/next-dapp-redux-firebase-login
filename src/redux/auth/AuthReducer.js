import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userid: false,
  email:false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload.isLogin,
      state.userid = action.payload.userid,
      state.email = action.payload.email
    },
    setLogout: (state) => {
      state.isLogin = false,
      state.userid = false,
      state.email = false
    }
  }

});

export const { setLogin, setLogout } = authSlice.actions;

export const selectCount = (state) => state.auth.value;

export default authSlice.reducer;
