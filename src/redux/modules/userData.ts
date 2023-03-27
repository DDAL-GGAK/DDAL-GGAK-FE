import { createSlice } from '@reduxjs/toolkit';
import { UserDataForm } from 'types/';

const initialState: UserDataForm | null = null;

const userDataSlicer = createSlice({
  name: 'userDataSlicer',
  initialState,
  reducers: {
    setUserData: (state) => state,
  },
});

export default userDataSlicer.reducer;
export const { setUserData } = userDataSlicer.actions;
