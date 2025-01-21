import Buttons from "./Buttons";
import "./BackgroundChanger.css";

const BackgroundChanger = () => {
    return (
        <div className="background-changer">
            <Buttons placeholder={"Red"} />
            <Buttons placeholder={"Yellow"} />
            <Buttons placeholder={"Black"} />
            <Buttons placeholder={"Purple"} />
            <Buttons placeholder={"Green"} />
            <Buttons placeholder={"Blue"} />
            <Buttons placeholder={"Orange"} />
        </div>
    )
}

export default BackgroundChanger;