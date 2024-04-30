import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})