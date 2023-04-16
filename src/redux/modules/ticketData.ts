import { createSlice } from '@reduxjs/toolkit';
import { Tickets } from 'types';

interface SetTicketDataAction {
  payload: Tickets;
}

interface SetLabelAction {
  payload: string;
}

export interface TicketState {
  ticket: Tickets;
  label: string;
}

const initialState: TicketState = {
  ticket: {
    TODO: [],
    IN_PROGRESS: [],
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
