import CardSwiper from './components/CardSwiper'
import IncubatorHero from './components/IncubatorHero'
import Advice from './components/Advice'
import Upcoming from './components/Upcoming'
import {NavLink} from 'react-router-dom'

const Incubator = () => {
    return (
        <>
            <IncubatorHero />
            <section className="contentSection" >
                <section className="featuredWrapper">
                    <div className="container">
                        <div className=" row">
                            <div className="featuredText col-lg-3 col-md-12">
                                <h2 className="featuredTitle">Featured Startups</h2>
                                <p className="featuredSubtitle">Invest in the next billion dollar company today</p>
                            </div>
                            <div className="featuredCards col-lg-9 col-md-12">
                                <CardSwiper />
                            </div>
                        </div>
                    </div>
                </section> 
                <Advice />
                <section className="featuredWrapper pb-5" id="Upcoming">
                <div className="container">
                    <div className="row">
                        <div className="featuredText col-xl-3 col-lg-4 col-md-6 col-12">
                            <h2 className="featuredTitle">Upcoming Startups</h2>
                            <p className="featuredSubtitle">These visionary companies and disruptors are on their journey to change the world.</p>
                        </div>
                        <Upcoming />
                        <div className="loadButton">
                            <NavLink to="/" className="button">Load more</NavLink>
                        </div>
                    </div>
                </div>
                </section>  
            </section>      
        </>
    )
}

export default Incubator
