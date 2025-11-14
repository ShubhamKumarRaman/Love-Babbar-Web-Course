import React, { useEffect, useState } from 'react'

const App = () => {

  const [text, setText] = useState('');

  // Variation 1 -> Every render
  // useEffect(() => {
  //   console.log("UI rendering Done");
  //   console.log(text);
  // })

  // Variation 2 -> First render
  // useEffect(()=>{
  //   console.log("UI redering Done.");
  // }, [])

  // Varation 3 -> First render + whenever depency changes
  // useEffect(()=>{
  //   console.log("Changed Observed");
  // },[text])

  //Variation 4 -> to handle unmounting of a component
  // useEffect(()=>{
  //   console.log("Listener added");

  //   return()=>{
  //     console.log("Listener removed");
  //   }
  // },[text])


  // function changeHandler(event) {
  //   setText(event.target.value);
  //   console.log(text);
  // }

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth, 
    height : window.innerHeight,
  })

  useEffect(()=>{
    const handleResize=()=>{
      setWindowSize({
        width:window.innerWidth, 
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleresize);

    return()=>{
      window.removeEventListener('resize', handleresize);
    }
  },[])

  return (
    <div className='App'>
      <input type="text" onChange={changeHandler} />

      <div>
        <h2>Window Size Tracker</h2>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
      </div>
    </div>
  )
}

export default App
