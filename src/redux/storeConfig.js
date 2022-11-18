import { configureStore } from "@reduxjs/toolkit"
import Reducer from "./dashboard/slice"
const store = configureStore ({
  reducer: {
    items: Reducer,
  },

})

export default store;