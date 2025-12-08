import React, { useState } from 'react'

const App = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function changeFirstHandler(event) {
    // console.log("First name: ", event.target.value);
    setFirstName(event.target.value);
  }

  function changeLastHandler(event) {
    // console.log("Last name: ", event.target.value);
    setLastName(event.target.value);
  }

  // console.log(firstName + "  " + lastName)

  return (
    <div className='App'>
      <form action="submit">
        <input type="text"
          placeholder='Enter First name'
          name='firstName'
          onChange={changeFirstHandler} />

        <br />

        <input type="text"
          placeholder='Enter last name'
          name='lastname'
          onChange={changeLastHandler} />
      </form>
    </div>
  )
}

export default App
