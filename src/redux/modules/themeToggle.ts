import { createSlice } from '@reduxjs/toolkit';

type ThemeToggleState = boolean;
const initialState: ThemeToggleState = false;

const themeToggle = createSlice({
  name: 'themeToggle',
  initialState,
  reducers: {
    toggle: (state) => !state,
  },
});

export default themeToggle.reducer;
export const { toggle } = themeToggle.actions;
