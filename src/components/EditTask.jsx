
import React from 'react'

const EditTask = ({ editText, setEditText, saveEdit, cancelEdit }) => {
  return (
    <div>

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
/* 
import React from "react";

const EditTask = ({ editText, setEditText, saveEdit, cancelEdit }) => {
  return (
    <div style={{ marginTop: 20, padding: 12, border: "1px solid #ccc", borderRadius: 8 }}>
      <h4>Edit Task</h4>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}-
        onKeyDown={(e) => {
          if (e.key === "Enter") saveEdit();
          if (e.key === "Escape") cancelEdit();
        }}
        style={{ width: "100%", padding: "8px" }}
      />
      <div style={{ marginTop: 8 }}>
        <button onClick={saveEdit} style={{ marginRight: 8 }}>Save</button>
        <button onClick={cancelEdit}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTask;


*/