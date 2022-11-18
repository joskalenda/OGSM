// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { fake } from "../../fake";

export const Item1Slice = createSlice({
  name: "items",
  initialState: { value: fake },
  reducers: {
    addItem1: (state, action) => {
      state.value.push(action.payload);
    },

    deleteItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },

    updateName: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});

export const { addItem1, deleteItem, updateName } = Item1Slice.actions;
export default Item1Slice.reducer;