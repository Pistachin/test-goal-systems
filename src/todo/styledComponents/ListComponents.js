import styled from 'styled-components'

export const ListItem = styled.li`
    border-bottom: 1px solid #ededed;
    display: flex;
    font-size: 18px;
    padding: 4px;
    position: relative;

    p {
        margin: 0 0 0 4px;
    }

    &:last-child {
        border-bottom: none;
    }

    &.editing {
        border-bottom: none;
        padding: 0;
    }
`

export const ListComponent = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
