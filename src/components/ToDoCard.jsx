import React from 'react'

export default function ToDoCard(props) { // Props (Properties) are passed to the component as an argument
    const {children, handleDeleteTodos, index, handleEditTodos} = props // props is an object, and { children } is a way to extract the children property directly from that object.
    // const children = props.children // This is another way to extract the children property from the props object
    // children is a special prop that is passed to components automatically. It represents the content between the opening and closing tags of the component.
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodos(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodos(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li> 
    )
}
