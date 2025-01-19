import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

export default function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    console.log("button re-rendered");
    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Increase</button>
            <button onClick={() => setCount(c => c - 1)}>Decrease</button>
        </>
    )
}