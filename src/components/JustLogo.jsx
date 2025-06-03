import './../styles/components/justLogo.scss';
import todoImg from './../assets/a logo for todo list app.jpeg';

import React from 'react'

const JustLogo = () => {
  return (
    <div className='justlogo'>

        <figure>
            <img src={todoImg} alt="todo logo" />
        </figure>

    </div>
  )
}

export default JustLogo;