import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventDetails {
  date: string;
  location: string;
  attendees: number;
  duration: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

interface FeaturedEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  details: EventDetails;
}

interface FeaturedEventState {
  events: FeaturedEvent[];
}

const initialState: FeaturedEventState = {
  events: [],
};

const featuredEventSlice = createSlice({
  name: "featuredEvent",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<FeaturedEvent>) {
      state.events.push(action.payload);
    },

    removeEvent(state) {
      state.events = [];
    },
  },
});

export const { addEvent, removeEvent } = featuredEventSlice.actions;
export default featuredEventSlice.reducer;
