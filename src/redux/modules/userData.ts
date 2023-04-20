import { createSlice } from '@reduxjs/toolkit';
import { UserDataForm } from 'types/';

const initialState: UserDataForm | object = {};

const userDataSlicer = createSlice({
  name: 'userDataSlicer',
  initialState,
  reducers: {
    setUserData: (state, actions) => {
      const { payload } = actions;

      return payload;
    },
    setUserProjectData: (state, actions) => {
      const { payload } = actions;
      if (state === null) return {};
      if (typeof state === 'object')
        return { ...(state as object), projects: [...payload] };

      return state;
    },
    removeUserData: () => {},
  },
});

export default userDataSlicer.reducer;
export const { setUserData, setUserProjectData, removeUserData } =
  userDataSlicer.actions;
