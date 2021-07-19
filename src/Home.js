import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="contentSection">
                <div className="container">    
                    <div className=" row">
                        <div className="mainLinks">
                            <div>
                                <NavLink to="/incubator" className="button">Incubator</NavLink>
                                <h1>Invest directly into minority innovations.</h1>
                            </div>
                            <div>
                                <NavLink to="/learn" className="button">Learn</NavLink>
                                <h1>From idea to unicorn, we teach minorities to be world leaders in tech</h1>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>    
        </>
    )
}

export default Home
