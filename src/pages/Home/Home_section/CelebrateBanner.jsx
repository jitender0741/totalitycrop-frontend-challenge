import React from 'react';
import data from '../../../JsonFile/Celebrate';

function CelebrateBanner() {

    return (
        <>
            <div className="container p-0 silder_banner responsive">
                    {
                        data.slice(0,1).map((val, ind) => {
                            const { id, image, Stitle, title, paragraph, price_heading, price, side_content } = val;
                            return (
                                <div key={id} className="inner_banner_slider d-flex">
                                    <div className="pos_img">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="banner_slider_content">
                                        <div className="top_content">
                                            <h4>{side_content}</h4>
                                        </div>
                                        <div className="slider_content_banner">
                                            <div className="slider_heading">
                                                <h4>{Stitle}</h4>
                                            </div>
                                            <div className="slider_text">
                                                <h2>{title}</h2>
                                            </div>
                                            <div className="slider_desc">
                                                <p>{paragraph}</p>
                                            </div>
                                        </div>
                                        <div className="starting_price d-flex">
                                            <div className="price_sec">
                                                <h5>{price_heading}</h5>
                                                <h4>₹ {price}</h4>
                                            </div>
                                            <button className='btn slider_banner_btn'>Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                <button className='arrow arrow_right_1'><img src="assets/image/right.svg" alt="" /></button>
                <button className='arrow arrow_left_1'><img src="assets/image/left.svg" alt="" /></button>
            </div>
        </>
    )
}

export default CelebrateBanner