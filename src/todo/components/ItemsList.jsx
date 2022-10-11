import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll, updateActive, updateCompleted } from './todoSlice'
import TodoItem from '../basicComponents/TodoItem'
import { ListComponent } from '../styledComponents/ListComponents'
import { toggleSingleItem } from '../utils/toggleItems'

const ItemsList = () => {
    const dispatch = useDispatch()
    const allTodos = useSelector(selectAll)
    const activeList = allTodos.active
    const completedList = allTodos.completed

    const handleCheckbox = (newValue, item) => {
        const newItem = { ...item, completed: !newValue }
        const updatedAllTodos = toggleSingleItem(allTodos, newItem)
        dispatch(updateActive(updatedAllTodos.activeList))
        dispatch(updateCompleted(updatedAllTodos.completedList))
    }

    return (
        <ListComponent>
            {[...activeList, ...completedList].map(item => {
                return (
                    <TodoItem
                        key={item.id}
                        item={item}
                        handleCheckbox={handleCheckbox}
                    />
                )
            })}
        </ListComponent>
    )
}

export default ItemsList
