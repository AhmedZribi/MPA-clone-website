import Mango from '../img/mango.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import Data from '../data/CardsData.json'
import SwiperCore , {Autoplay, Navigation} from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import { NavLink } from 'react-router-dom'

SwiperCore.use([Autoplay, Navigation]);

const CardSwiper = () => {
    return (
        <>
            <div className="swiper-container">
                <Swiper      
                    breakpoints= {{
                        1200: {
                            slidesPerView : 3,
                        },
                        640 : {
                            slidesPerView : 2,
                        },
                        639 : {
                            slidesPerView : 1,
                        }
                    }}
                    navigation
                    loop={true}
                    autoplay={{ delay: 3000 }} 
                >
                    {Data.map( card => (
                        <SwiperSlide valueclassName="swiper-wrapper">
                            <div className="swiper-slide item">
                                <div className="card">
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
                        </SwiperSlide>
                        ))}
                </Swiper> 
            </div>
        </>
    )
}

export default CardSwiper
