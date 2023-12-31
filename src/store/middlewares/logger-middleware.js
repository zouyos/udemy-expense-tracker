import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addExpense,
  setIncome,
  countActionsPerformed,
} from "store/expense/expsense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  // predicate: (action) => {
  //   // return true;
  //   return (
  //     action.type === "expenseSlice/addExpense" ||
  //     action.type === "expenseSlice/setIncome"
  //   );
  // },
  matcher: isAnyOf(addExpense, setIncome),
  effect: (action, listenerAPI) => {
    //log la dernière action
    console.log(action);
    listenerAPI.dispatch(countActionsPerformed());
    //log tout le store
    console.log(listenerAPI.getState());
  },
});
