import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expsense-slice";

const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
  },
});

export { store };
