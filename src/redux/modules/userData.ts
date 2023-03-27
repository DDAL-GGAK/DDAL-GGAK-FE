import { createSlice } from '@reduxjs/toolkit';
import { UserDataForm } from 'types/';

const initialState: UserDataForm | null = null;

const userDataSlicer = createSlice({
  name: 'userDataSlicer',
  initialState,
  reducers: {
    setLoginData: (state) => state,
  },
});

export default userDataSlicer.reducer;
export const { setLoginData } = userDataSlicer.actions;
