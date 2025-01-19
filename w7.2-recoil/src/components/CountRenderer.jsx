import { useRecoilValue } from "recoil"
import { countAtom } from "../store/atoms/count";

export default function CountRenderer() {
    const count = useRecoilValue(countAtom);

    return (
        <>
            <p>{count}</p>
        </>
    )
}