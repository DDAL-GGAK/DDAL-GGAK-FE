import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectsLink, UserDataForm } from 'types/';

const initialState: UserDataForm | null = null;

const userDataSlicer = createSlice<
  UserDataForm | null,
  {
    setUserData: (
      state: UserDataForm | null,
      actions: PayloadAction<UserDataForm>
    ) => UserDataForm | null;
    setUserProjectData: (
      state: UserDataForm | null,
      actions: PayloadAction<ProjectsLink[]>
    ) => UserDataForm | null;
    removeUserData: (state: UserDataForm | null) => null;
  }
>({
  name: 'userDataSlicer',
  initialState,
  reducers: {
    setUserData: (state, actions) => {
      const { payload } = actions;

      return payload;
    },
    setUserProjectData: (state, action) => {
      const { payload } = action;
      const newProjects = payload as ProjectsLink[];
      if (state === null) return initialState;
      return {
        ...state,
        projects: [...newProjects],
      };
    },
    removeUserData: () => null,
  },
});

export default userDataSlicer.reducer;
export const { setUserData, setUserProjectData, removeUserData } =
  userDataSlicer.actions;
