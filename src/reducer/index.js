//Main Reducer
const initialState = {
    todos: []
}

const addTodo = (state = initialState, action) => {
    if (action.type === 'ADD_TODO_ITEM') {
        return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
        });
    }

    return state;
}


// const delTodo = (state = initialState, action) => {
//     if (action.type === 'DELETE_TODO_ITEM') {
//         return Object.assign({}, state, {
//             todos: state.todos.
//         })
//     }
// }
//Maybe input a deletion function.

export default addTodo;