/* eslint-disable */

import { useSetRecoilState } from 'recoil';
import './Buttons.css';
import { backgroundColorAtom } from '../store/atoms/color';

const Buttons = (props) => {
    const setBackgroundColor = useSetRecoilState(backgroundColorAtom);

    return (
        <>
            <button onClick={() => setBackgroundColor(color)} className="custom-button" >{props.placeholder}</button>
        </>
    )
}

export default Buttons;