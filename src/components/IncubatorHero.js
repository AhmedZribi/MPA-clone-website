import Hero from '../img/incubator.png'
import { NavLink } from 'react-router-dom'
const IncubatorHero = () => {
    return (
        <>
            <section className="incubator-wrapper">
                <div className="hero">
                    <div className="incubatorHero">
                        <div className="leftSide">
                            <img src={Hero} alt="Hero" />
                        </div>
                        <div className="rightSide">
                            <h1 className="featuredText">Invest directly into minority innovations.</h1>
                            <div className="rightSide_button">
                                <div className="button btn-gradient"><NavLink to='/'>View Startups</NavLink></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default IncubatorHero
