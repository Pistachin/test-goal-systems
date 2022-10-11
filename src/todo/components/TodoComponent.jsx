import React from 'react'
import InputComponent from '../basicComponents/InputComponent'
import ItemsList from './ItemsList'
import MainHeader from '../styledComponents/MainHeader'

const TodoComponent = () => {
    return (
        <div>
            <MainHeader>Todos</MainHeader>
            <InputComponent />
            <ItemsList />
        </div>
    )
}

export default TodoComponent
