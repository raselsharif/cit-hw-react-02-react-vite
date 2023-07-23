import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Copyright from './Copyright'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
            <Copyright />
        </>
    )
}

export default RootLayout