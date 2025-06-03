import React from 'react'

//icons
import { RiDeleteBinFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const TaskList = ({ groupedTasks, deleteTask, markedCompleted, startEditingTask}) => {
  return (
    <div>

        {Object.entries(groupedTasks).map(([dateLabel,tasksForDate]) => {
            const completedCount = tasksForDate.filter( t => t.completed).length;
            return (
                <div key={dateLabel}>
                    <h3>{dateLabel} - Completed {completedCount} of {tasksForDate.length}</h3>
                    {/* main list */}
                    
                    {tasksForDate.map((task) => (
                            <div key={task.id} className='list'>
                                <div className="left">
                                  <p style={{ flexGrow: 1, textDecoration: task.completed ? "line-through" : "none",}}>{task.text}</p>
                                </div>

                                <div className="right">
                                     {!task.completed && (
                                    <FaCheck onClick={() => markedCompleted(task.id)} />
                                  )}
                                  <MdEdit onClick={() => startEditingTask(task.id, task.text)} />
                                  <RiDeleteBinFill onClick={() => deleteTask(task.id)} />
                                </div>

                            </div>
                    ))}
                    
                </div>
            )
        })}
 
    </div>
  )
}

export default TaskList;
/* 

const TaskList = ({ groupedTasks, markCompleted, deleteTask, startEditing }) => {
  return (
    <>
      {Object.entries(groupedTasks).map(([dateLabel, tasksForDate]) => {
        const completedCount = tasksForDate.filter(t => t.completed).length;
        return (
          <div key={dateLabel} style={{ marginTop: 30 }}>
            <h3>{dateLabel} — Completed {completedCount} of {tasksForDate.length}</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {tasksForDate.map(task => (
                <li
                  key={task.id}
                  style={{
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "gray" : "black",
                  }}
                >
                  <span style={{ flexGrow: 1 }}>{task.text}</span>

                  {!task.completed && (
                    <button
                      onClick={() => markCompleted(task.id)}
                      style={{
                        marginLeft: 8,
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        padding: "4px 8px",
                        borderRadius: 4,
                        cursor: "pointer",
                      }}
                    >
                      Mark Completed
                    </button>
                  )}

                  <button
                    onClick={() => startEditing(task.id, task.text)}
                    style={{
                      marginLeft: 8,
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      padding: "4px 8px",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{
                      marginLeft: 8,
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "4px 8px",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default TaskList;


*/