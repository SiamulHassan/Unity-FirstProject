import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // initialClient: localStorage.getItem("userClients")
  //   ? JSON.parse(localStorage.getItem("userClients"))
  //   : [],
  initialClient: null,
  pushInfo: [],
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    clientRed: (state, action) => {
      // ata only local storag theke data nibe...ar local er data tai tumi card e map korteso
      // jodi onno component e data lage sekhaneo tumi chaile local data use korte paro OR pushInfo theke data nite paro...like reducer lagtese na Local storage e data dicche.
      state.initialClient = action.payload;
      state.pushInfo.push(action.payload);

      // state.pushInfo.push(action.payload);
    },
    removeItem: (state, action) => {
      state.pushInfo = action.payload;
    },
  },
});

export const { clientRed, removeItem } = clientSlice.actions;
export default clientSlice.reducer;
