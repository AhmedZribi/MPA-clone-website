import LearnHero from './components/LearnHero'
import CourseSwiper from './components/CourseSwiper'
import { NavLink } from 'react-router-dom'

const Learn = () => {
    return (
        <>
            <LearnHero />
            <section className="courseSection pb-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 pb-2">
                            <div className="search-items pt-5">
                                <form>
                                    <input placeholder="What course are you looking for?"/>
                                    <div className="options-type">
                                        <select className="course-search">
                                            <option>Filter Search</option>
                                            <option value="my_courses">My courses</option>
                                            <option value="featured_courses">Featured courses</option> 
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="mb-5 pb-3">
                        <div className="course-category">
                            <h2 className="coursesTitle mb-3">My Courses</h2>
                        </div> 
                        <section className="coursesWrapper">
                            <div className="row container">           
                                <div className="featuredCards col-12">
                                    <CourseSwiper />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="mb-5 pb-3">
                        <div className="course-category">
                            <h2 className="coursesTitle mb-3">Featured Courses</h2>
                        </div> 
                        <section className="coursesWrapper">
                            <div className="row container">           
                                <div className="featuredCards col-12">
                                    <CourseSwiper />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="container">
                        <div className=" row">
                            <div className="loadButton">
                                <NavLink to="/" className="button">Load more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Learn
