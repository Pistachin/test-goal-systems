import cloneDeep from 'lodash/cloneDeep'

export const setAllActive = itemsList => {
    return itemsList.map(item => {
        return { ...item, completed: false }
    })
}

export const setAllComplete = itemsList => {
    return itemsList.map(item => {
        return { ...item, completed: true }
    })
}

export const toggleSingleItem = (allTodos, updatedItem) => {
    const activeList = cloneDeep(allTodos.active)
    const completedList = cloneDeep(allTodos.completed)

    if (updatedItem.completed) {
        const newCompletedList = [...completedList, updatedItem]
        const itemIndex = activeList.findIndex(item => {
            return item.id === updatedItem.id
        })
        activeList.splice(itemIndex, 1)
        return { activeList, completedList: newCompletedList }
    } else if (!updatedItem.completed) {
        const newActiveList = [...activeList, updatedItem]
        const itemIndex = completedList.findIndex(item => {
            return item.id === updatedItem.id
        })
        completedList.splice(itemIndex, 1)
        return { activeList: newActiveList, completedList }
    }
}
