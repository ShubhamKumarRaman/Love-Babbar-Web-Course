import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  function clickHandler() {
    //Move to Support page
    navigate('/support')
  }

  function backHandler() {
    navigate(-1)
  }
  return (
    <div>
      This is About Page
      <button onClick={clickHandler}>Move to Support page</button>
      <button onClick={backHandler}>Go back</button>
    </div>
  )
}

export default About
