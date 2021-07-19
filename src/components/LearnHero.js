import Hero from '../img/learn.png'

const LearnHero = () => {
    return (
        <>
          <section className="learn-wrapper">
                <div className="hero">
                    <div className="learnHero">
                        <div className="leftSide">
                            <img src={Hero} alt="Hero" />
                        </div>
                        <div className="rightSide">
                            <h1 className="featuredText">Learn high in demand</h1>
                            <h1 className="featuredText">IT Skills & Get Crypto.</h1>
                            <div className="signature">
                                <h3>powered by</h3>
                                <h3>KoinStreet</h3>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>  
        </>
    )
}

export default LearnHero
