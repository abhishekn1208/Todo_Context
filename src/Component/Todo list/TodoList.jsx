import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'

const TodoList = () => {
    const {todo , deleteTodo} = useContext(TodoContext);

  return (
    <div>
     <ul>
     {
        todo.map((todo,id)=>{
            return(
                <li key={id}>{todo.text}
                <button onClick={()=>deleteTodo(todo.id)}>Remove</button>
                </li>
            )
        })
      }
     </ul>
    </div>
  )
}

export default TodoList
