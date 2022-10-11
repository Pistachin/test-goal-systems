import cloneDeep from 'lodash/cloneDeep'

const removeItem = (itemsList, itemId) => {
    const clonedList = cloneDeep(itemsList)
    const itemIndex = clonedList.findIndex(item => {
        return item.id === itemId
    })
    clonedList.splice(itemIndex, 1)
    return clonedList
}

export default removeItem
