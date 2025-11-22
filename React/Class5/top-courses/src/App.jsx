import React from 'react'
import Navbar from './components/Navbar.jsx'
import Filter from './components/Filter.jsx'
import Cards from './components/Cards.jsx'
import { apiUrl, filterData } from './data.js'

const App = () => {

    

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Filter filterData={filterData} />
            </div>
            <div>
                <Cards />
            </div>
        </div>
    )
}

export default App
