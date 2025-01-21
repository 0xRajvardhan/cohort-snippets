/* eslint-disable */

const Buttons = ({ color, placeholder, changeBackground }) => {
  
    return (
        <>
            <button style={{ backgroundColor: color.toLowerCase() }} onClick={() => changeBackground(color)} className="custom-button" >{placeholder}</button>
        </>
    )
}

export default Buttons;