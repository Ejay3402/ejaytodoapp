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
                                <div className="todo-text">
                                  <p style={{ flexGrow: 1, textDecoration: task.completed ? "line-through" : "none",}}>{task.text}</p>
                                </div>

                                <div className="task-icons">
                                     {!task.completed && (
                                    <FaCheck className='ixons check' onClick={() => markedCompleted(task.id)} />
                                  )}
                                  <MdEdit className='ixons edit' onClick={() => startEditingTask(task.id, task.text)} />
                                  <RiDeleteBinFill className='ixons delete ' onClick={() => deleteTask(task.id)} />
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