import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,

  reducers: {
    addTransaction: (state, action) => {
      const transaction = {
        id: nanoid(),
        title: action.payload.title,
        amount: Number(action.payload.amount),
        type: action.payload.type,
        category: action.payload.category,
      };

      state.transactions.push(transaction);
    },

    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const {
  addTransaction,
  removeTransaction,
} = expenseSlice.actions;

export default expenseSlice.reducer;