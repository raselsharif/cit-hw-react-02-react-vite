import React from 'react'

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
                                <li><a href="#">home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">gallery</a></li>
                                <li><a href="#">blog</a></li>
                            </ul>
                            <div className="menu_link">
                                <a href="#">contact</a>
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