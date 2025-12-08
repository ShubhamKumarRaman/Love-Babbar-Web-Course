import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  return (
    <div className='flex flex-col items-center'>
      <form>

        <br />
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name='firstName'
          id='firstName'
          placeholder='Enter Name'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />

        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name='lastName'
          id='lastName'
          placeholder='Enter Last Name'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline'
        />

        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name='email'
          id='email'
          placeholder='name@gmail.com'
          value={formData.email}
          onChange={changeHandler}
          className='outline'
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className='outline'
        >
          <option value="">Inida</option>
          <option value="">United States</option>
          <option value="">United Kingdom</option>
          <option value="">Russia</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name='streetAddress'
          id='streetAddress'
          placeholder='Enter Address'
          value={formData.streetAddress}
          onChange={changeHandler}
          className='outline'
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name='city'
          id='city'
          placeholder='City'
          value={formData.city}
          onChange={changeHandler}
          className='outline'
        />

        <br />
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name='state'
          id='state'
          placeholder='State'
          value={formData.state}
          onChange={changeHandler}
          className='outline'
        />

        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name='postalCode'
          id='postalCode'
          placeholder='803213'
          value={formData.postalCode}
          onChange={changeHandler}
          className='outline'
        />

      </form>
    </div>
  )
}

export default App
