import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
    countActionsPerformed: 0,
  },
  reducers: {
    addExpense: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      });
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
    },
    incrementCountActionsPerformed: (currentSlice, action) => {
      currentSlice.countActionsPerformed++;
    },
  },
});

const { addExpense, setIncome, countActionsPerformed } = expenseSlice.actions;

export { addExpense, setIncome, countActionsPerformed };
