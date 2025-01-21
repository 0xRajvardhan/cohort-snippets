import Buttons from "./Buttons";
import "./BackgroundChanger.css";
import { useState } from "react";

const BackgroundChanger = () => {

    const [backgroundColor, setBackgroundColor] = useState("orange");

    const changeBackground = (color)=>{
        setBackgroundColor(color);
    }

    return (
        <div className="background-changer" style={{ backgroundColor: backgroundColor.toLowerCase() }}>
            <Buttons color="Red"  placeholder={"Red"} changeBackground={changeBackground}/>
            <Buttons color="Yellow" placeholder={"Yellow"} changeBackground={changeBackground}/>
            <Buttons color="Black" placeholder={"Black"} changeBackground={changeBackground}/>
            <Buttons color="Purple" placeholder={"Purple"} changeBackground={changeBackground}/>
            <Buttons color="Green" placeholder={"Green"} changeBackground={changeBackground}/>
            <Buttons color="Blue" placeholder={"Blue"} changeBackground={changeBackground}/>
            <Buttons color="Orange" placeholder={"Default"} changeBackground={changeBackground}/>
        </div>
    )
}

export default BackgroundChanger;