import React from 'react'
import Navbar from './components/Navbar.jsx'
import Filter from './components/Filter.jsx'
import Cards from './components/Cards.jsx'
import { apiUrl, filterData } from './data.js'
const App = () => {
  return (
    <div>
      <Navbar/>

      <Filter
        filterData = {filterData}
      />

      <Cards/>
    </div>
  )
}

export default App
