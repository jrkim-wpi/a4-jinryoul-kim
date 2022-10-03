import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: 1,
            task: input,
        });
    setInput('');
    };
    const whenSubmit = e => {
        setInput(e.target.value);
    }
    return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='add a task' value={input} name='text' className='taskInput' onChange={whenSubmit}></input>
        <button className='todoBtn'>submit</button>
    </form>
  )
}

export default TodoForm