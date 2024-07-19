import desData from "../data.json";
import img1 from "../assets/destination/image-moon.png";
import img2 from "../assets/destination/image-mars.png";
import img3 from "../assets/destination/image-europa.png";
import img4 from "../assets/destination/image-titan.png";
import { useState } from "react";

function Destination() {
    const [indicator, changeIndicator] = useState("moon");
    const [title, setTitle] = useState("moon");
    const [description, setDescription] = useState(desData.destinations[0].description);
    const [distance, setDistance] = useState(desData.destinations[0].distance);
    const [travel, setTravel] = useState(desData.destinations[0].travel);
    const [imageUrl, setImageUrl] = useState(img1);
    function changeInfo(info) {
        if (info === "moon") {
            changeIndicator("moon");
            setTitle(info);
            setDescription(desData.destinations[0].description);
            setDistance(desData.destinations[0].distance);
            setTravel(desData.destinations[0].travel);
            setImageUrl(img1);
        } else if (info === "mars") {
            changeIndicator("mars");
            setTitle(info);
            setDescription(desData.destinations[1].description);
            setDistance(desData.destinations[1].distance);
            setTravel(desData.destinations[1].travel);
            setImageUrl(img2);
        } else if (info === "europa") {
            changeIndicator("europa");
            setTitle(info);
            setDescription(desData.destinations[2].description);
            setDistance(desData.destinations[2].distance);
            setTravel(desData.destinations[2].travel);
            setImageUrl(img3);
        } else if (info === "titan") {
            changeIndicator("titan");
            setTitle(info);
            setDescription(desData.destinations[3].description);
            setDistance(desData.destinations[3].distance);
            setTravel(desData.destinations[3].travel);
            setImageUrl(img4);
        } else {
            return false;
        }
    }

    return (
        <div>
            

            <div className="des-hero flex">

                <div className="des-hero-left">
                    <img src={imageUrl} className="des-hero-img" alt="Planet Image" />
                </div>

                <div className="des-hero-right">

                    <nav>
                        <ul className="secondary-nav primary-color-light uppercase font-berlow-condensed fs-nav-letter-spacing fs-nav-text">
                            {/* underline indicator is highlighted nav underline-indicator */}
                            <li type="button" className={`des-btn des-btn-1 ${indicator === "moon" ? "underline-indicator" : ''}`} onClick={() => changeInfo("moon")}>Moon</li>
                            <li type="button" className={`des-btn des-btn-2 ${indicator === "mars" ? "underline-indicator" : ''}`} onClick={() => changeInfo("mars")}>Mars</li>
                            <li type="button" className={`des-btn des-btn-3 ${indicator === "europa" ? "underline-indicator" : ''}`} onClick={() => changeInfo("europa")}>Europa</li>
                            <li type="button" className={`des-btn des-btn-4 ${indicator === "titan" ? "underline-indicator" : ''}`} onClick={() => changeInfo("titan")}>Titan</li>
                        </ul>
                    </nav>

                    <div className="des-text-aria">
                        <h1 className="des-planet">{title}</h1>
                        <p className="des-description primary-color-light">{description}</p>
                    </div>
                    <div className="des-info-aria">
                        <div className="left">
                            <p className="font-reset-p primary-color-light uppercase font-berlow-condensed fs-letter-spacing-2">Avg. distance</p>
                            <p className="font-reset-h des-distance uppercase ff-heading">{distance}</p>
                        </div>
                        <div className="right">
                            <p className="font-reset-p primary-color-light uppercase font-berlow-condensed fs-letter-spacing-2">Est. travel time</p>
                            <p className="font-reset-h des-time uppercase ff-heading">{travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;