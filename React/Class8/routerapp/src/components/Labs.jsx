import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    //Move to about page
    navigate('/about');
  }

  return (
    <>
      <div>
        This is Labs Page
      </div>
      <button onClick={clickHandler}>Move to About page</button>
    </>
  )
}

export default Labs
