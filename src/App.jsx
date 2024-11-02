import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

  // state is a way to store data in a component
  const [todos, setTodos] = useState([ 
  ]) 
  const [todoValue, setTodoValue] = useState('') // initial value of todoValue is an empty string

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos:
      newList
    }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo] // This will create a new array with the newTodo added to the end
    persistData(newTodoList)
    setTodos(newTodoList) // This will update the todos state with the newTodoList
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage) { // If localStorage is not available
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
     
  }, []) // dependencies array is empty, so this effect will only run when the page reloads

  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <ToDoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </>
  )
}

export default App
