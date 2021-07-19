import {NavLink} from 'react-router-dom'
import Mango from './img/mango.jpg'
import {FaTwitter, FaLinkedin, FaFacebook} from 'react-icons/fa'
import Related from './components/CardSwiper'

const StartupInfo = () => {
    return (
        <>
            <section className="infoSection">
                <div className="containerTop">
                    <div className="col">
                        <div className="row containerTopLeft">
                            <div className="containerTopDetail">
                                <NavLink to="/incubator">
                                    <i className="topBackButton"></i>
                                </NavLink>
                                <img src={Mango} alt="topLogo" className="topLogo"/>
                                <h3 className="topName">Mangoswap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 col-md-3 col-sm-12">
                        <div className="containerTopFunds">
                            <div className="topFunds">
                                <h3 className="topFundsTopic">Funds raised</h3>
                                <h3 className="topFundsPercentage">50% complete</h3>
                            </div>
                            <h3 className="topFundsAmount">$200,000/$400,000</h3>
                            <div className="progress">
                                <div className="progress_bar progress_bar_bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="topButton">
                            <div className="button btn-gradient"><NavLink to='/incubator'>Fund Startup</NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className=" row">
                        <section className="infoLeftSide col-lg-4 col-md-12">
                            <div className="row containerLeft">
                                <div className="container p-4">
                                    <div className="row container">
                                        <h2 className="leftTopic">Founded 17th May, 2015</h2>
                                    </div>
                                    <hr className="mt-3 mb-3" />
                                    <div className="row container leftInfo">
                                        <div>
                                            <p className="leftDetailTopic">Website</p>
                                            <NavLink to="/incubator" className="leftDetailDetail tw-mb-2">mangoswap.com</NavLink>
                                            <NavLink className="mr-2 ml-2" to="/incubator"><FaTwitter /></NavLink>
                                            <NavLink className="mr-2 ml-2" to="/incubator"><FaLinkedin /></NavLink>
                                            <NavLink className="mr-2 ml-2" to="/incubator"><FaFacebook /></NavLink> 
                                        </div>
                                        <p className="leftDetailTopic">Location</p>
                                        <p className="leftDetailDetail tw-mb-2">San Francisco, California</p>
                                        <p className="leftDetailTopic">Team Size</p>
                                        <p className="leftDetailDetail tw-mb-2">100-500 people</p>
                                    </div>
                                    <hr className="mt-3 mb-3" />
                                    <div className="row container teamContainer">
                                        <h2 className="leftTopic mb-3">Meet the team</h2>
                                        <div className="teamMember">
                                            <div className="teamMemberImg">
                                                <NavLink to="#" ></NavLink>
                                            </div>
                                            <div className="teamMemberInfo">
                                                <h3>Edmund Kitan</h3>
                                                <p>Founder</p>
                                            </div>
                                        </div>
                                        <div className="teamMember">
                                            <div className="teamMemberImg">
                                                <NavLink to="#" ></NavLink>
                                            </div>
                                            <div className="teamMemberInfo">
                                                <h3>Olarenwaju Cesar</h3>
                                                <p>Co-Founder</p>
                                            </div>
                                        </div>
                                        <div className="teamMember">
                                            <div className="teamMemberImg">
                                                <NavLink to="#" ></NavLink>
                                            </div>
                                            <div className="teamMemberInfo">
                                                <h3>Uzo Amanda</h3>
                                                <p>Head of Growth</p>
                                            </div>
                                        </div>
                                        <div className="teamMember">
                                            <div className="teamMemberImg">
                                                <NavLink to="#" ></NavLink>
                                            </div>
                                            <div className="teamMemberInfo">
                                                <h3>Donald Duke</h3>
                                                <p>Head of Product</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-3 mb-3" />
                                    <div className="row container tagsContainer">
                                        <h2 className="leftTopic mb-3">Tags</h2>
                                        <div>
                                            <NavLink to="#" className="leftBadge">Crypto</NavLink>
                                            <NavLink to="#" className="leftBadge">Exchanges</NavLink>
                                            <NavLink to="#" className="leftBadge">NFT</NavLink>
                                            <NavLink to="#" className="leftBadge">Blockchain</NavLink>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <section className="infoRightSide col-lg-8 col-md-12">
                            <div className="row containerRight pb-5">
                                <div className="container p-4">
                                    <div className="row container">
                                        <h2 className="rightTopic mb-3 mt-1">About startup</h2>
                                    </div>
                                    <div className="row container">
                                        <p className="rightDescription">Amet minim mollit non deserunt ullamco est 
                                        sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non 
                                        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
                                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                                        sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                                        do amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                                        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est 
                                        sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt 
                                        ullamco est sit aliqua dolor do amet sint</p>
                                    </div>
                                    <hr className="mt-4 mb-4" />
                                    <div className="row container">
                                        <h2 className="rightTopic mb-3 mt-1">Vision</h2>
                                    </div>
                                    <div className="row container">
                                        <p className="rightDescription">Amet minim mollit non deserunt ullamco est 
                                        sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non 
                                        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
                                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                                        sunt nostrud amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row containerRight pb-5">
                                <div className="container p-4">
                                    <div className="row container">
                                        <h2 className="rightTopic mb-3 mt-1">Related startups</h2>
                                    </div>
                                    <div className="featuredCards">
                                        <Related />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>   
            </section>      
        </>
    )
}

export default StartupInfo
