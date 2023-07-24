import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

function My_Navbar() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header_wrapper">
                        <div className="header_text">
                            <div className="header_text_icon">
                                <i className="fa-regular fa-envelope"></i>
                                <a className="mail" href="mailto:mail@yourmail.com">mail@yourmail.com</a>
                            </div>
                            <div className="header_text_icon">
                                <i className="fa-solid fa-phone-volume"></i>
                                <a href="call:+896 120 5889">+896 120 5889 (toll free)</a>
                            </div>
                        </div>
                        <div className="header_icons">
                            <ul>
                                <li><a href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a></li>
                                <li><a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a></li>
                                <li><a href="#">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a></li>
                                <li><a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Navbar expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="Logo.png" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <div className="menu">
                            <ul>
                                <li>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="company">
                                        about
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="service">
                                        service
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="gallery">
                                        gallery
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="blog">
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="menu_link">
                                <NavLink to="map"> 
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default My_Navbar