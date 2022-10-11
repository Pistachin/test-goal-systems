import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: [],
    completed: [],
    status: 'idle',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        updateActive: (state, action) => {
            state.active = action.payload
        },
        updateCompleted: (state, action) => {
            state.completed = action.payload
        },
        updateAll: (state, action) => {
            const active = action.payload.filter(
                todoItem => todoItem.completed === false,
            )
            const completed = action.payload.filter(
                todoItem => todoItem.completed === true,
            )
            state.active = active
            state.completed = completed
        },
    },
})

export const { updateActive, updateCompleted, updateAll } = todoSlice.actions

export const selectActive = state => {
    return state.todo?.active
}
export const selectCompleted = state => {
    return state.todo?.completed
}
export const selectAll = state => {
    return {
        active: state.todo?.active,
        completed: state.todo?.completed,
    }
}

export default todoSlice.reducer
