import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="hero">
            <div id="hero-inner">
                <div id="hero-left">
                    <p className="p1 font-berlow-condensed fs-heading-5 fs-letter-spacing primary-color-light">So, you want to travel to</p>
                    <p className="p2 fs-heading-1 font-heading">SPACE</p>
                    <p className="primary-color-light">Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>
                <div id="hero-right">
                    <div className="right-inner">
                        <Link to={'/destination'} className="explore-btn font-bollefair fs-letter-spacing">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Home;