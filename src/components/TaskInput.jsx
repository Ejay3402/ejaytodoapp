import React from 'react'


const TaskInput = ({input, setInput, addTask}) => {
  return (
    <div className='addTask'>

        <input className='taskInput' value={input} type="text" placeholder='Add a new task..' onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === `Enter` && addTask() } />

        <button className='taskBtn' onClick={addTask} >Add</button>

    </div>
  )
}

export default TaskInput;
