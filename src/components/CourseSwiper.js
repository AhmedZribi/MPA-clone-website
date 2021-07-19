import { Swiper, SwiperSlide } from 'swiper/react'
import Data from '../data/CoursesData.json'
import SwiperCore , {Autoplay, Navigation} from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import { NavLink } from 'react-router-dom'

SwiperCore.use([Autoplay, Navigation]);

const CourseSwiper = () => {
    return (
        <>
           <div className="swiper-container">
                <Swiper      
                    breakpoints= {{
                        1200: {
                            slidesPerView : 3,
                        },
                        768 : {
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
                    {Data.map( course => (
                        <SwiperSlide valueclassName="swiper-wrapper">
                            <div className="swiper-slide item">
                                <div className="course">
                                    <div className="course-body">
                                        <div className="course-header mb-3">
                                            <div className="btn mb-3">
                                                <p>{course.earn}</p>
                                            </div>
                                            <h2 className="course-header-title">{course.title}</h2>
                                            <p className="course-header-description">{course.description}</p>
                                        </div> 
                                        <div className="course_container">
                                            <div className="button btn-gradient mb-3">
                                                <NavLink to='/'>{course.btn}</NavLink>
                                            </div>
                                            <h3 className="course_size">{course.size}</h3>
                                            <div className="course-progress">
                                                <div className="progress_bar course_progress_bar_bg"></div>
                                            </div>
                                            <h3 className="course_percentage">{course.percentage}</h3>
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

export default CourseSwiper
