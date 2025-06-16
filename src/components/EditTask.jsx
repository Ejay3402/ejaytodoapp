import React from 'react'

const EditTask = ({ editText, setEditText, saveEdit, cancelEdit }) => {
  return (
    <div className='edit-task'>

      <h4>Edit Task</h4>
      <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={(e) => {
        if(e.key === `Enter`) return saveEdit();
        if(e.key === `Escape`) return cancelEdit();
      }}  placeholder='Edit task..' />

      <div>
        <button onClick={saveEdit}>save</button>
        <button onClick={cancelEdit}>canuel</button>
      </div>

    </div>
  )
}

export default EditTask;