import React, { useEffect, useState } from 'react';
import imgtl1 from '../assets/technology/image-launch-vehicle-landscape.jpg';
import imgtp1 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import imgtl2 from '../assets/technology/image-spaceport-landscape.jpg';
import imgtp2 from '../assets/technology/image-spaceport-portrait.jpg';
import imgtl3 from '../assets/technology/image-space-capsule-landscape.jpg';
import imgtp3 from '../assets/technology/image-space-capsule-portrait.jpg';
import data from '../data.json';
import useWindowWidth from './CustomHook';

function Technology() {
    const windowWidth = useWindowWidth();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageT, setImageT] = useState(windowWidth < 1100 ? imgtl1 : imgtp1);
    const [name, setName] = useState(data.technology[0].name);
    const [textInfo, setTextInfo] = useState(data.technology[0].description);

    useEffect(() => {
        const imagesLandscape = [imgtl1, imgtl2, imgtl3];
        const imagesPortrait = [imgtp1, imgtp2, imgtp3];
        
        if (windowWidth < 768) {
            setImageT(imagesLandscape[currentIndex]);
        } else {
            setImageT(imagesPortrait[currentIndex]);
        }
    }, [windowWidth, currentIndex]);

    function techContantChange(index) {
        setCurrentIndex(index);
        setName(data.technology[index].name);
        setTextInfo(data.technology[index].description);
    }

    return (
        <div className="tech-hero">
            <div className="tech-inner">
                <div className="section-01 font-heading">
                    <nav>
                        <button type="button" className={`techbtn1 ${currentIndex === 0 ? 'active-bg' : ''}`} onClick={() => techContantChange(0)}>1</button>
                        <button type="button" className={`techbtn2 ${currentIndex === 1 ? 'active-bg' : ''}`} onClick={() => techContantChange(1)}>2</button>
                        <button type="button" className={`techbtn3 ${currentIndex === 2 ? 'active-bg' : ''}`} onClick={() => techContantChange(2)}>3</button>
                    </nav>
                </div>
                <div className="section-02 uppercase">
                    <p>The terminology...</p>
                    <p className="vehiclename font-heading fs-heading-3">{name}</p>
                    <p className="vehicledetail">{textInfo}</p>
                </div>
                <div className="section-03">
                    <img src={imageT} alt="Technology" />
                </div>
            </div>
        </div>
    );
}

export default Technology;
