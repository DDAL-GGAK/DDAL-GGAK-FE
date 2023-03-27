import { createSlice } from '@reduxjs/toolkit';

type ThemeToggleForm = boolean;
const initialState: ThemeToggleForm = false;

const themeToggleSlicer = createSlice({
  name: 'themeToggleSlicer',
  initialState,
  reducers: {
    toggle: (state) => !state,
  },
});

export default themeToggleSlicer.reducer;
export const { toggle } = themeToggleSlicer.actions;
