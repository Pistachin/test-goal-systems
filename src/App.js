import React from 'react'
import styled from 'styled-components'
import TodoComponent from './todo/components/TodoComponent'

const TodoApp = styled.div`
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

function App() {
    return (
        <TodoApp>
            <TodoComponent />
        </TodoApp>
    )
}

export default App
