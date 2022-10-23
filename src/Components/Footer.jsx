import React from 'react'

function Footer() {
  return (
    <>
        <div className="container-fluid p-0 footer_bg">
            <div className="container p-0 footer_wid">
                <div className="footer_section">
                    <div className="footer_logo">
                        <img src="assets/image/logo.png" alt="" />
                    </div>
                    <div className="about_section">
                        <h5>About Us</h5>
                        <ul>
                            <li><a href="">Our Heritage</a></li>
                            <li><a href="">Our Company</a></li>
                            <li><a href="">Coffeehouse</a></li>
                        </ul>
                    </div>
                    <div className="about_section">
                        <h5>Responsibility</h5>
                        <ul>
                            <li><a href="">Community</a></li>
                            <li><a href="">Ethical Sourcing</a></li>
                            <li><a href="">Environment</a></li>
                            <li><a href="">Diversity</a></li>
                        </ul>
                    </div>
                    <div className="about_section">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Season's Gifting</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Customer Service</a></li>
                            <li><a href="">Delivery</a></li>
                        </ul>
                    </div>
                    <div className="about_section">
                        <h5>SOCIAL MEDIA</h5>
                        <ul className='social_media'>
                            <li><a href=""><img src="assets/image/social_meida/instagram.svg" alt="" /></a></li>
                            <li><a href=""><img src="assets/image/social_meida/facebook.svg" alt="" /></a></li>
                            <li><a href=""><img src="assets/image/social_meida/twitter.svg" alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="about_section">
                        <ul className='download'>
                            <li><a href=""><img src="assets/image/appstoreiOS.png" alt="" /></a></li>
                            <li><a href=""><img src="assets/image/appstoreAndroid.png" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="bootom_footer d-flex">
                    <div className="right_side">
                        <ul>
                            <li><a href="">Web Accessiblity</a></li>
                            <li><a href="">Privacy Statement</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <p><a href="">© 2022 Starbucks Coffee Company. All rights reserved.</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer