import { useRecoilValue } from "recoil";
import { evenSelector } from "../store/atoms/isEven";


export default function IsEven() {
    
    const isEven = useRecoilValue(evenSelector);
    return (
        <>
            <p>{isEven}</p>
        </>
    )
}