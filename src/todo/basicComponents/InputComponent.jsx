import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    updateActive,
    updateCompleted,
    selectAll,
} from '../components/todoSlice'
import { enterPress } from '../utils/onKeyPress'
import manageSingleTodo from '../utils/manageSingleTodo'
import { BASIC_TODO } from '../constants'

const InputComponent = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState(BASIC_TODO)
    const allTodos = useSelector(selectAll)

    const handleInput = event => {
        if (enterPress(event)) {
            const newTodos = manageSingleTodo(allTodos, todo)
            if (newTodos.list === 'active') {
                dispatch(updateActive(newTodos.newList))
            } else if (newTodos.list === 'completed') {
                dispatch(updateCompleted(newTodos.newList))
            }
            setTodo(BASIC_TODO)
        }
    }
    return (
        <div style={{ position: 'relative' }}>
            <input
                type="text"
                placeholder="Type something to do..."
                value={todo.text}
                onKeyUp={e => {
                    handleInput(e)
                }}
                onChange={e => {
                    setTodo({ ...todo, text: e.target.value })
                }}
            />
        </div>
    )
}

export default InputComponent
