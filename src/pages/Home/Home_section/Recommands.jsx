import React from 'react';
import Main_heading from '../../../Components/Main_heading';
import ViewBtn from '../../../Components/ViewBtn';
import RecommandsJson from '../../../JsonFile/RecommandsJson';


function Recommands() {


  return (
    <>
      <div className="container-fluid p-0 bg-secondary-color">
        <div className="sec_img">
          <img src="assets/image/greyleafright.svg" alt="" />
        </div>
        <div className="container p-0">
          <Main_heading title="Barista Recommends" links="View Menu" />
          <div className="inner-slider-grid">
            {
              RecommandsJson.slice(0, 3).map((val) => {
                const { id, title, image, veg_img, desc, price } = val;
                return (
                  <div key={id} className="slider-grid d-flex-start">
                    <div className="slider-image">
                      <img src={image} alt="" />
                    </div>
                    <div className="slider-content">
                      <div className="veg_img">
                        <img src={veg_img} alt="" />
                      </div>
                      <div className="slider-heading">
                        <h3>{title}</h3>
                      </div>
                      <div className="slider_para">
                        <p>{desc}</p>
                      </div>
                    </div>
                    <div className="price_btn d-flex">
                      <h4>₹ {price}</h4>
                      <button className='btn sec_btn'>Add Item</button>
                    </div>
                  </div>
                )
              })
            }

            <button className='arrow arrow_left'><img src="assets/image/left.svg" alt="" /></button>
            <button className='arrow arrow_right'><img src="assets/image/right.svg" alt="" /></button>
          </div>
          <ViewBtn Link_title="View More" />
        </div>
      </div>
    </>
  )
}

export default Recommands