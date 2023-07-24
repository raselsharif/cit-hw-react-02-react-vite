import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Copyright from './Copyright'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function RootLayout() {
    return (
        <>
            {/* <Nav /> */}
            <Navbar/>
            <Outlet />
            <Footer />
            <Copyright />
        </>
    )
}

export default RootLayout