import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])


    const addNewTodo = (todo) => {

        dispatch({
            type: '[TODO] Add Todo',
            payload: todo
        })
    }

    const deleteTodo = (id) => {
        dispatch({
            type: '[TODO] Delete Todo',
            payload: id
        })
    }

    const doneTodo = (id) => {
        dispatch({
            type: '[TODO] Done todo',
            payload: id
        })
    }

    return {
        todos,
        addNewTodo,
        deleteTodo,
        doneTodo,
        todosCount: todos.length,
        todosPending: todos.filter(todo => !todo.done).length
    }

}
