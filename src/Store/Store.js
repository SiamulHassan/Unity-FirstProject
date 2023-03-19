import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "../Slice/ClientSlice";

export const store = configureStore({
  reducer: {
    //ClientReducer: ClientReducer(add)
    ClientReducer: ClientSlice,
  },
});
