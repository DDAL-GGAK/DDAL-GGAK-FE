import { createSlice } from '@reduxjs/toolkit';
import { UserDataForm } from 'types/';

const initialState: UserDataForm | null = null;

const userDataSlicer = createSlice({
  name: 'userDataSlicer',
  initialState,
  reducers: {
    setUserData: (state, actions) => {
      const { payload } = actions;

      return payload;
    },
    removeUserData: () => null,
  },
});

export default userDataSlicer.reducer;
export const { setUserData, removeUserData } = userDataSlicer.actions;
