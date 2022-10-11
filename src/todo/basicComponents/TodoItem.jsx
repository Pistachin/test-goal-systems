import React from 'react'
import { ListItem } from '../styledComponents/ListComponents'

const TodoItem = ({ item, handleCheckbox }) => {
    return (
        <ListItem>
            <div>
                <input
                    title="Toggle todo"
                    value={item.completed}
                    type="checkbox"
                    onClick={e => {
                        handleCheckbox(e.target.value, item)
                    }}
                />
            </div>
            <div>
                <p>{item.text}</p>
            </div>
        </ListItem>
    )
}

export default TodoItem
