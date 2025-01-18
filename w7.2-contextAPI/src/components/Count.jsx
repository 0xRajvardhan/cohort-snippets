import { RecoilRoot } from "recoil";
import Buttons from "./Buttons";
import CountRenderer from "./CountRenderer";

export function Count (){
    console.log("Count rerednered");
    return (
        <>
        <RecoilRoot>
        <CountRenderer />
        <Buttons />
        </RecoilRoot>
        </>
      )
}