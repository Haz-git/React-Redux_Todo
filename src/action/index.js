//Action Creators

export const todoCreator = (payload) => {
    return {
        type: 'ADD_TODO_ITEM',
        payload: payload
    }
}