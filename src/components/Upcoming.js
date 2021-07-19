import Data from '../data/CardsData.json'
import Mango from '../img/mango.jpg'
import { NavLink } from 'react-router-dom'

const Upcoming = () => {
    return (
        <>
            {Data.map( card => (
                <div className="upcomingCard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="card card_container">
                        <div className="card-body">
                            <div className="card-header">
                                <img src={Mango} alt="mango"/>
                                <h2 className="card-header-title">{card.fundTitle}</h2>
                            </div> 
                            <div className="row container mb-3">
                                <p>{card.fundText}</p>
                            </div>
                            <div className="fund_container">
                                <div className="fund_top">
                                    <h3 className="fund_topic">{card.fundTopic}</h3>
                                    <h3 className="fund_percentage">{card.fundPercentage}</h3>
                                </div>
                                <h3 className="fund_amount">{card.fundAmount}</h3>
                                <div className="progress">
                                    <div className="progress_bar progress_bar_bg"></div>
                                </div>
                            </div>
                            <div className="card_button-container">
                                <NavLink to="/" className="button btn-filled">{card.fundBtn}</NavLink>
                                <NavLink to="/startupInfo" className="button btn-outline">{card.fundInfo}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))} 
        </>
    )
}

export default Upcoming
