import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'

const TodoForm = () => {
    const {addTodo} = useContext(TodoContext);
    const [todoText, setTodoText] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!todoText) return;

        const newTodo = {id: Date.now(), text : todoText}
        addTodo(newTodo);
        setTodoText('') 
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)} placeholder='Add a new Todo' />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm
