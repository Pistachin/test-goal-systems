import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../todo/components/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
})
