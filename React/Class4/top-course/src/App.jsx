import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Filter from './components/Filter.jsx'
import Cards from './components/Cards.jsx'
import { apiUrl, filterData } from './data.js'
const App = () => {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        //Save data into a variable
        setCourses(output.data);
      } catch (error) {
        toast.error("Something wents wrong");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <Filter
        filterData={filterData}
      />

      <Cards courses={courses}/>
    </div>
  )
}

export default App
