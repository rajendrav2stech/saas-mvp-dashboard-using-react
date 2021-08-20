import React, { createContext, useReducer } from 'react'

const initialState = {
    todo: []
}
export const TodoContext = createContext(initialState)
/**
 * 
 * @param {string} state - A reducer is a pure function that takes an action and the previous state of the application and returns the new state.
 * @param {Function} action - The action describes what happened and it is the reducer's job to return the new state based on that action.
 * @returns 
 */
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
/**
 * 
 * @param {children} children - children is a special property of React components which contains any child elements defined within the component 
 * @returns (
 *  <TodoContext.Provider /> - Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
 * )
 */
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