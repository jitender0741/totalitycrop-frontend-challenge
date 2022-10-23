import React from 'react'
import Main_heading from '../../../Components/Main_heading';
import ViewBtn from '../../../Components/ViewBtn';

function LearnCoffee() {
    return (
        <>
            <div className="container-fluid p-0 bg-secondary-color">
                <div className="container width_section">
                    <Main_heading title="Learn more about the world of coffee!" links="Discover Now" />
                    <div className="coffee_banner">
                        <div className="coffe_img">
                            <img src="assets/image/coffee.jpg" alt="" />
                        </div>
                        <div className="culture_section">
                            <h5>Coffee Culture</h5>
                        </div>
                        <div className="coffee_content">
                            <div className="coffee_content_heading">
                                <h2>Coffee Beginnings</h2>
                            </div>
                            <div className="descr">
                                <p>How world's most traded commodity came into existence.</p>
                            </div>
                            <button className='btn coffee_btn_'>Learn More</button>
                        </div>
                    </div>
                    <ViewBtn Link_title="Discover More"/>
                </div>
            </div>
        </>
    )
}

export default LearnCoffee