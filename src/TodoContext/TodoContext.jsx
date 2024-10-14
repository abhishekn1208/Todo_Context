import {createContext, useState} from "react";

export const TodoContext = createContext()

export const TodoProvider =({children})=>{
    const [todo, setTodo] = useState([]);

    const addTodo=(todo)=>{
        setTodo(prev=>[...prev,todo])
    }

    const deleteTodo=(id)=>{
        setTodo((prev)=>prev.filter(todo =>todo.id !==id))
    }

    return(
        <TodoContext.Provider value={{todo , addTodo , deleteTodo}} >
            {children}
        </TodoContext.Provider>
    )
}