import { createSlice } from '@reduxjs/toolkit';
import { Tickets } from 'types';

interface SetTicketDataAction {
  payload: Tickets;
}

const initialState: Tickets = {
  TODO: [],
  IN_PROGRESS: [],
  DONE: [],
};

const ticketDataSlicer = createSlice({
  name: 'ticketDataSlicer',
  initialState,
  reducers: {
    setTicketData: (state, action: SetTicketDataAction) => action.payload,
  },
});

export default ticketDataSlicer.reducer;
export const { setTicketData } = ticketDataSlicer.actions;
