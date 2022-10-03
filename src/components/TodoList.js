import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, SetTodos] = useState([])

    const addTodo = todo => {
        const newTodos = [todo, ...todos];
        SetTodos(newTodos)
        console.log(...todos);
    }

  return (
    <div>
        <h1>Input The Task</h1>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList