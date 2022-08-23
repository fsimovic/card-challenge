import { createSlice } from "@reduxjs/toolkit";

export const subscribersSlice = createSlice({
  name: "subscribers",
  initialState: {
    subscribers: [],
  },
  reducers: {
    appendSubscribers: (state, action) => {
      if (!state.subscribers.length) state.subscribers = action.payload;
    },
  },
});

export const fecthSubscribers = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      dispatch(appendSubscribers(await response.json()));
    } catch (err) {
      new Error("Error: ", err);
    }
  };
};

export const { appendSubscribers } = subscribersSlice.actions;

export default subscribersSlice.reducer;

export const getAllSubscribers = (state) => state.subscribers.subscribers;

export const getSubscriberById = (state, subId) =>
  state.subscribers.subscribers.find((sub) => sub.id == subId);
