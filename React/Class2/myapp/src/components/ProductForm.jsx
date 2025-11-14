import React, { useState } from 'react'

import './ProductForm.css'

const ProductForm = () => {

  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')

  // function titleChangeHandler(event) {
  //   // console.log("Title is trying to change. ")
  //   // console.log(event.target.value)
  //   setTitle(event.target.value)
  // }

  // function dateChangeHandler(event){
  //   setDate(event.target.value)
  // }

  const [fullProductInput, setfullProductInput] = useState({
    title: '',
    date: ''
  })

  function setfullProductInput(event, prevState) {
    //return object with updated parameters
    return { ...prevState, title: event.target.value }
  }


  return (
    <form >
      <div className="new-product_controls">

        <div className='new-product_controls'>
          <label >Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className='new-product_controls'>
          <label htmlFor="">Date</label>
          <input type="date" onChange={dateChangeHandler} min='2025-01-01' max='2025-12-12' />
        </div>

        <div className='new-product_button'>
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
