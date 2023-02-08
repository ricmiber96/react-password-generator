import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '../reducers/filtersReducer'

const store = configureStore({
  reducer: {
    password: filtersReducer
  }
})

export default store
