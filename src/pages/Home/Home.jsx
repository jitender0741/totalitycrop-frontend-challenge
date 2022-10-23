import React from 'react';
import BestSeller from './Home_section/BestSeller';
import Navbar from '../../Components/Navbar';
import Recommands from './Home_section/Recommands';
import CelebrateBanner from './Home_section/CelebrateBanner';
import Offerning from './Home_section/Offerning';
import LearnCoffee from './Home_section/LearnCoffee';
import News from './Home_section/News';
import Footer from '../../Components/Footer';
import Res_hero_section from './Home_section/Res_hero_section';


function Home() {
    return (
        <>
            <Navbar />
            <Res_hero_section />
            <div className="container-fluid p-0 bg-color banner-section">
                <div className="container p-0">
                    <div className="d-flex h-20">
                        <h5>A world of rewards awaits you!Sign up now.</h5>
                        <button className='btn'>Know More</button>
                    </div>
                </div>
            </div>
            <BestSeller />
            <Recommands />
            <CelebrateBanner />
            <Offerning />
            <LearnCoffee />
            <News />
            <Footer />
        </>
    )
}

export default Home;