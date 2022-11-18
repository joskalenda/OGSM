import { configureStore } from "@reduxjs/toolkit"
import { item1reducer, item2reducer } from "./dashboard/slice"

const store = configureStore ({
  reducer: {
    items: item1reducer,
    SecondItems: item2reducer
  },

})

export default store;