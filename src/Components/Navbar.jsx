import React from 'react';

function Navbar() {
    return (
        <>
            <div className="container-fluid p-0 Navbar">
                <div className="container p-0 resp_cont">
                    <div className="row d-flex">
                        <div className="logo_section d-flex">
                            <div className="logo_img">
                                <img src="assets/image/logo.png" alt="" />
                            </div>
                        </div>
                        <div className="menu_section">
                            <ul className='d-flex-start resp_menu'>
                                <li><a href=""><img src="assets/image/menu_icon/home.svg" className='menu_img' alt="" /> Home</a></li>
                                <li><a href=""><img src="assets/image/menu_icon/gift_Inactive.svg" className='menu_img' alt="" /> Gift</a></li>
                                <li><a href=""><img src="assets/image/menu_icon/Group 710.svg" className='menu_img menu_icon_change' alt="" /> Order</a></li>
                                <li><a href=""><img src="assets/image/menu_icon/pay-filled.svg" className='menu_img' alt="" /> Pay</a></li>
                                <li><a href=""><img src="assets/image/menu_icon/Mask.svg" className='menu_img' alt="" /> Store</a></li>
                            </ul>
                        </div>
                        <div className="search_section">
                            <div className="input_section">
                                <img src="assets/image/search.svg" alt="" />
                                <div className="input-pso">
                                    <input type="text" placeholder='Looking for something specific?' />
                                </div>
                            </div>
                        </div>
                        <div className="account">
                            <div className="profile">
                                <img src="assets/image/account_thin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar