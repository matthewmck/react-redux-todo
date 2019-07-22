
const initialState = {
    todos: ["Item 1"],
    selectedOption: undefined,
    errorMsg: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODOS':
            return {
                ...state,
                todos: [ ...state.todos , action.payload ],
                errorMsg: undefined
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                selectedOption: state.todos[action.payload]
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                selectedOption: undefined
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo !== action.payload)
            }
        case 'DELETE_TODOS':
            return {
                ...state,
                todos: state.todos = []
            }
        case 'ERROR':
            return {
                ...state,
                errorMsg: action.payload
            }
        default:
            return state;
    }
}