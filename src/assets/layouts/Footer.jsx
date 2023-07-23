import React from 'react'

function Footer() {
    return (
        <section id="footer">
            <div class="container">
                <div class="footer_wrapper">
                    <div class="footer_contact">
                        <div class="footer_logo">
                            <img src="footerLogo.png" alt="footer logo" />
                        </div>
                        <div class="footer_mail">
                            <i class="fa-regular fa-envelope"></i>
                            <a href="mailto:mail@yourmail.com">mail@yourmail.com</a>
                        </div>
                        <div class="footer_phone">
                            <i class="fa-solid fa-phone-volume"></i>
                            <a href="dial:+896 120 5889">+896 120 5889 (Toll free)</a>
                        </div>
                        <div class="footer_address">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>101 Baker Street, New York, USA, 12345</span>
                        </div>
                        <div class="footer_icons">
                            <ul>
                                <li><a href="#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a></li>
                                <li><a href="#">
                                    <i class="fa-brands fa-twitter"></i>
                                </a></li>
                                <li><a href="#">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a></li>
                                <li><a href="#">
                                    <i class="fa-brands fa-instagram"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer_company">
                        <div class="footer_heading">
                            <h3>company</h3>
                        </div>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">gallery</a></li>
                        </ul>
                    </div>
                    <div class="others">
                        <div class="footer_heading">
                            <h3>others</h3>
                        </div>

                        <ul>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">contact</a></li>
                            <li><a href="#">teems & conditions</a></li>
                            <li><a href="#">privacy policy</a></li>
                        </ul>
                    </div>
                    <div class="certificate">
                        <div class="footer_heading">
                            <h3>certificate</h3>
                        </div> 
                        <img src="Cert1.jpg" alt="certificate" />
                        <img src="Cert2.jpg" alt="certificate" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer