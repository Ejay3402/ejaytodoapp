import './../styles/index.scss';
import './../styles/components/todoApp.scss';
import React, { useEffect, useState } from 'react';
import UserName from './UserName';
import todoImg from './../assets/a logo for todo list app.jpeg';
import { RiEdit2Fill } from "react-icons/ri";
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { getDateLabel } from './getDateLabel';
import EditTask from './EditTask';

const TodoApp = () => {
  // Retrieve tasks from localStorage or default to an empty array
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      localStorage.removeItem('tasks'); // optional: reset corrupted data
      return [];
    }
  });

  const [input, setInput] = useState('');
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });

  const [editingName, setEditingName] = useState(!userName); // fix: show name input only if not set
  const [editId , setEditId] = useState(null);
  const [editText, setEditText] = useState(``);

  // Save user name to localStorage
  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (!input.trim()) return; // fix: prevent empty tasks
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks ]);
    setInput('');
    setEditId(null);
  };

  //mark completed
  const markedCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed : true} : task)
  )}

  //staet Editing
  const startEditingTask = (id, text) => {
    setEditId(id);
    setEditText(text);
  }

  const saveEdit = () => {
    if (editText.trim() === ``) return;
    setTasks(tasks.map(task => task.id === editId ? {...task, text : editText} : task));
    setEditId(null);
    setEditText(``);
  }

  //grouped Tasks
  const groupedTasks = tasks.reduce((acc, task) => {
    const label = getDateLabel(task.createdAt);
    if (!acc[label]) acc[label] = [];
    acc[label].push(task);
    return acc;
  }, {});


  //delete a task 

  const deleteTask = (id) => {
    setTasks(tasks.filter( task => task.id !== id));
    
  }

  // Show username input if not set yet
  if (editingName) {
    return (
      <UserName
        userName={userName}
        setEditingName={setEditingName}
        setUserName={setUserName}
      />
    );
  }

  return (
    <div className="todp-app">
      <figure>
        <img src={todoImg} alt="todo icon" />
      </figure>
      <h1>EJay Todo App</h1>
      <h2>
        Welcome, {userName} 👋{' '}
        <RiEdit2Fill className="RiEdit2Fill" onClick={() => setEditingName(true)} />
      </h2>

      {/* Task input */}
      <TaskInput input={input} setInput={setInput} addTask={addTask} />

      {/* edit task */}
      {editId && (
        <EditTask editText={editText} setEditText={setEditText} saveEdit={saveEdit} cancelEdit={() => setEditId(null)}/>
      )} 

      {/* Task list*/}
      <TaskList groupedTasks={groupedTasks} deleteTask={deleteTask}  markedCompleted={markedCompleted}  startEditingTask={startEditingTask} />
      
    </div>
  );
};

export default TodoApp;
