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

export const Item2Slice = createSlice({
  name: "SecondItems",
  initialState: { value: fake },
  reducers: {
    addItem2: (state, action) => {
      state.value.push(action.payload);
    },

    deleteItem2: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },

    updateName2: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});


export const { addItem1, deleteItem, updateName } = Item1Slice.actions;
export const { addItem2, deleteItem2, updateName2} = Item2Slice.actions;
// export default Item1Slice.reducer;
export const item1reducer = Item1Slice.reducer
export const item2reducer = Item2Slice.reducer