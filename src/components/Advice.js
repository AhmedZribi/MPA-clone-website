import Advice1 from '../img/advice1.png'
import Advice2 from '../img/advice2.png'
import Advice3 from '../img/advice3.png'
import {NavLink} from 'react-router-dom'
const Advice = () => {
    return (
        <>
            <section className="adviceWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="img-container">
                                <img src={Advice1} alt="advice1" />
                                <NavLink to="/" className="btn">Advise a Startup</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-container">
                                <img src={Advice2} alt="advice2" />
                                <NavLink to="/" className="btn">Join Minority Ventures Cohort</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-container">
                                <img src={Advice3} alt="advice3" />
                                <NavLink to="/" className="btn">Help &lt;Code/&gt;</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advice
