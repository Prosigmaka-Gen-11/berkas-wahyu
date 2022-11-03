import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'

export const Store = configureStore({
  reducer: {
    authHandler: AuthSlice
  },
})

export default Store;