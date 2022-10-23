import React from 'react';
import Main_heading from '../../../Components/Main_heading';
import Menu from '../../../JsonFile/MenuJson';

function BestSeller() {
    return (
        <>
            <div className="container p-0 Curations_section">
                <Main_heading title="Handcrafted Curations"/>
                <div className="inner_grid">
                    {
                        Menu.map((val) => {
                            const {id, title, image } = val;
                            return (
                                <div key={id} className="inner_grid_section">
                                    <div className="grid_img">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="grid_heading">
                                        <h3>{title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BestSeller