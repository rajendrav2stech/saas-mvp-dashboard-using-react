import React, { createContext, useReducer } from 'react'

const initialState = {
    todo: []
}
export const TodoContext = createContext(initialState)
const reducer = (state, action) => {
    switch (action.type) {
        case 'add_todo':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case 'edit_todo':
            return {
                ...state,
                todo: state.todo.filter((ite) => ite.id !== action.payload)
            }
        case 'delete_todo':
            return {
                ...state,
                todo: state.todo.filter((items) => items.id !== action.payload)
            }
        default:
            return state
    }
}
const TodoProvider = ({ children }) => {
    const [toDoForms, dispatch] = useReducer(reducer, initialState)
    const addToDo = (todo) => {
        dispatch({
            type: 'add_todo',
            payload: todo
        })
    }
    const editToDo = (id) => {
        dispatch({
            type: 'edit_todo',
            payload: id
        })
    }
    const deleteToDo = (id) => {
        dispatch({
            type: 'delete_todo',
            payload: id
        })
    }
    return (
        <TodoContext.Provider
            value={{ todo: toDoForms.todo, addToDo, editToDo, deleteToDo }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider