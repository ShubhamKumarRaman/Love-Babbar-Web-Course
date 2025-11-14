import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)
  const response = [
    {
      itemName: "Shubham",
      itemDate: "11",
      itemMonth: 'October',
      itemYear: '2003'
    },
    {
      itemName: "Khushi",
      itemDate: "12",
      itemMonth: "September",
      itemYear: "2004"
    },
    {
      itemName: "Anurag",
      itemDate: "17",
      itemMonth: "April",
      itemYear: "2002"
    }
  ];

  return (
    <>
      <div className='App'>
        {/* <Item name="Shubham"></Item>
        <ItemDate day='11' month='October' year='2003'></ItemDate>

        <Item name="Khushi"></Item>
        <ItemDate day='12' month='September' year='2004'></ItemDate>

        <Item name="Anurag"></Item>
        <ItemDate day='17' month='April' year='2002'></ItemDate> */}

        <Card>
          <Item name={response[0].itemName}>This is first item</Item>
          <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

          <Item name={response[1].itemName}>This is second item</Item>
          <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

          <Item name={response[2].itemName}>This is third item</Item>
          <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

        </Card>
        <div className="App">
          Hello world
        </div>
      </div>
    </>
  )
}

export default App
