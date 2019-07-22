
export const addTodo = value => ({
    type: 'ADD_TODOS',
    payload: value
});

export const openModal = todoIndex => ({
    type: 'OPEN_MODAL',
    payload: todoIndex
});

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
});

export const deleteTodo = todo => ({
    type: 'DELETE_TODO',
    payload: todo
});

export const deleteTodos = () => ({
    type: 'DELETE_TODOS'
});

export const error = msg => ({
    type: 'ERROR',
    payload: msg
});