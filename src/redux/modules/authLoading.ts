import { createSlice } from '@reduxjs/toolkit';

type AuthLoading = boolean;
interface AuthLoadingProps {
  type: string;
  payload: boolean;
}
const initialState: AuthLoading = false;

const authLoadingSlicer = createSlice({
  name: 'authLoadingSlicer',
  initialState,
  reducers: {
    setAuthLoading: (state, action: AuthLoadingProps) => action.payload,
  },
});

export default authLoadingSlicer.reducer;
export const { setAuthLoading } = authLoadingSlicer.actions;
