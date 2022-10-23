import React from 'react'
import Main_heading from '../../../Components/Main_heading';
import ViewBtn from '../../../Components/ViewBtn';
import Blog from '../../../JsonFile/Blog';

function News() {
    return (
        <>
            <div className="container-fluid p-0 Blog_section_bg">
                <div className="container p-0">
                    <Main_heading title="We have news for you!" links="Fint Out More" />
                    <div className="offering_section">
                        {
                            Blog.slice(0, 1).map((val) => {
                                const { id, title, image, veg_img, paragraph } = val;
                                return (
                                    <div key={id} className="offerning_main">
                                        <div className="card_image blog_img">
                                            <img src={image} alt="" />
                                        </div>
                                        <div className="blog_section">
                                            <div className="slider-content card_offer">
                                                <div className="slider-heading Blog_section">
                                                    <h3 className='mb-0 mt-0'>{title}</h3>
                                                </div>
                                                <div className="slider_short_para Blog_para">
                                                    <p>{paragraph}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_btn card_btn blog_btn">
                                            <button className='btn sec_btn'>Know More</button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <ViewBtn Link_title="View More" />
                </div>
            </div>
        </>
    )
}

export default News