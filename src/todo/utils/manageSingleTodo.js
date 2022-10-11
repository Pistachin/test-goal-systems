import cloneDeep from 'lodash/cloneDeep'

const manageSingleTodo = (allTodos, item) => {
    const activeList = allTodos.active
    const completedList = allTodos.completed
    if (!item.id) {
        return addItem(activeList, item)
    } else {
        const listName = item.completed ? 'complete' : 'active'
        const listToModify = item.completed ? completedList : activeList
        return editItem(listToModify, item, listName)
    }
}

const addItem = (itemsList, item) => {
    return {
        newList: [...itemsList, { ...item, id: crypto.randomUUID() }],
        list: 'active',
    }
}

const editItem = (itemsList, newItem, listName) => {
    const clonedList = cloneDeep(itemsList)
    const itemIndex = clonedList.findIndex(item => {
        return item.id === newItem.id
    })
    clonedList.splice(itemIndex, 1, newItem)
    return { newList: clonedList, list: listName }
}

export default manageSingleTodo
