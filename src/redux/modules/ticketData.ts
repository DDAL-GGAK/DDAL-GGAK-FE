import { createSlice } from '@reduxjs/toolkit';
import { Tickets, TicketState } from 'types';

interface SetTicketDataAction {
  payload: Tickets;
}

interface SetLabelAction {
  payload: string;
}

const initialState: TicketState = {
  ticket: {
    TODO: [],
    IN_PROGRESS: [],
    REVIEW: [],
    DONE: [],
  },
  label: 'All',
};

const ticketDataSlicer = createSlice({
  name: 'ticketDataSlicer',
  initialState,
  reducers: {
    setTicketData: (state, action: SetTicketDataAction) => {
      return { ...state, ticket: action.payload };
    },
    setLabel: (state, action: SetLabelAction) => {
      return { ...state, label: action.payload };
    },
  },
});

export default ticketDataSlicer.reducer;
export const { setTicketData, setLabel } = ticketDataSlicer.actions;
