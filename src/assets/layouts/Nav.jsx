import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
            {/* <!-- =============== Header Section Start Here =========== --> */}

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
            {/* <!-- =============== Header Section End Here =========== --> */}

            {/* <!-- =============== navbar Section Start Here =========== --> */}
            <nav>
                <div className="container">
                    <div className="nav_wrapper">
                        <div className="nav_logo">
                            <img src="Logo.png" alt="logo" />
                        </div>
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
                    </div>
                </div>
            </nav>
            {/* <!-- =============== navbar Section End Here =========== --> */}
        </>
    )
}

export default Nav