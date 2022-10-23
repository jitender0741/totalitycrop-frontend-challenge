import React from 'react';
import Main_heading from '../../../Components/Main_heading';
import OfferningJson from '../../../JsonFile/OfferningJson';

function Offerning() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="container p-0">
                    <Main_heading title="Latest Offerings" />
                    <div className="offering_section">

                        {
                            OfferningJson.slice(0,1).map((val) => {
                                const { id, title, image, veg_img, desc, paragraph, price } = val;
                                return (
                                    <div key={id} className="offerning_main">
                                        <div className="card_image">
                                            <img src={image} alt="" />
                                        </div>
                                        <div className="slider-content card_offer">
                                            <div className="veg_img mb-0">
                                                <img src={veg_img} alt="" />
                                            </div>
                                            <div className="slider-heading">
                                                <h3 className='mb-0 mt-0'>{title}</h3>
                                            </div>
                                            <div className="slider_para ">
                                                <p>{desc}</p>
                                            </div>
                                            <div className="slider_short_para">
                                                <p>{paragraph}</p>
                                            </div>
                                        </div>
                                        <div className="price_btn card_btn d-flex">
                                            <h4>₹ {price}</h4>
                                            <button className='btn sec_btn'>Add Item</button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Offerning