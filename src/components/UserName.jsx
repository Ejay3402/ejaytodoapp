import './../styles/index.scss';
import todoImg from './../assets/a logo for todo list app.jpeg';

import React from 'react';



const UserName = ({ userName, setUserName, setEditingName}) => {
  return (
    <div className='username'>

        <figure className='logo-box'>
            <img src={todoImg} alt='todo logo' className='logo' />
        </figure>
        <h1>Todo App</h1>
        <h2>Enter your User name.</h2>

        <input type="text" placeholder='Your name...' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={() => {
          if (userName.trim() !== ``)
              setEditingName(false)
        }} className='username-btn  btns' >Save</button>

    </div>
  )

}

export default UserName;