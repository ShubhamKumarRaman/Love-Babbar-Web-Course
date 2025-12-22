import React from 'react'
import Home from './Home'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MainHeader
