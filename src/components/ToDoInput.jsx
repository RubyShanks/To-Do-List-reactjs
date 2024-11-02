import { useState } from "react"

export default function ToDoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>   
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter task here..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('') // This will reset the value of todoValue to an empty string
            }}>Add</button>
        </header>
    )
}