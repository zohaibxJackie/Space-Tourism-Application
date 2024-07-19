import { useState } from "react";
import imgc1 from "../assets/crew/image-douglas-hurley.png";
import imgc2 from "../assets/crew/image-mark-shuttleworth.png";
import imgc3 from "../assets/crew/image-victor-glover.png";
import imgc4 from "../assets/crew/image-anousheh-ansari.png";
import { GoDot, GoDotFill } from "react-icons/go";
import info from "../data.json";
function Crew() {
    const [role, setRole] = useState(info.crew[0].role);
    const [name, setName] = useState(info.crew[0].name);
    const [bio, setBio] = useState(info.crew[0].bio);
    const [image, setImage] = useState(imgc1);
    function changeDInfo(elem) {
        if (elem === "001") {
            setRole(info.crew[0].role);
            setName(info.crew[0].name);
            setBio(info.crew[0].bio);
            setImage(imgc1);
        } else if (elem === "002") {
            setRole(info.crew[1].role);
            setName(info.crew[1].name);
            setBio(info.crew[1].bio);
            setImage(imgc2);
        } else if (elem === "003") {
            setRole(info.crew[2].role);
            setName(info.crew[2].name);
            setBio(info.crew[2].bio);
            setImage(imgc3);
        } else if (elem === "004") {
            setRole(info.crew[3].role);
            setName(info.crew[3].name);
            setBio(info.crew[3].bio);
            setImage(imgc4);
        } else {
            console.log("something wrong");
        }
    }
    return (
        <div className="crw-main">
            <div className="crw-hero flex">
                <div className="crw-left flex justify-center align-center">
                    <div className="crw-text-aria uppercase">
                        <p className="change-content-01 font-heading fs-heading-5 opacity-low">{role}</p>
                        <p className="change-content-02 font-heading fs-heading-4">{name}</p>
                        <p className="change-content-03 primary-color-light fs-subheading-2">{bio}</p>
                        <div className="dot-indicator flex gap-2">
                            <span className={`dot ${role === "Commander" ? 'opacity-high' : 'opacity-low'}`} onClick={() => {changeDInfo("001");}}>
                                <GoDotFill />
                            </span>
                            <span className={`dot ${role === "Mission Specialist" ? 'opacity-high' : 'opacity-low'}`} onClick={() => {changeDInfo("002");}}>
                                <GoDotFill />
                            </span>
                            <span className={`dot ${role === "Pilot" ? 'opacity-high' : 'opacity-low'}`} onClick={() => {changeDInfo("003");}}>
                                <GoDotFill />
                            </span>
                            <span className={`dot ${role === "Flight Engineer" ? 'opacity-high' : 'opacity-low'}`} onClick={() => {changeDInfo("004");}}>
                                <GoDotFill />
                            </span>

                        </div>
                    </div>
                </div>
                <div className="crw-right flex justify-center">
                    <img src={image} alt="" className="change-content-04" />
                </div>
            </div>
        </div>
    )
}

export default Crew;