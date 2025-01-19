import { RecoilRoot } from "recoil";
import Buttons from "./Buttons";
import CountRenderer from "./CountRenderer";
import IsEven from "./IsEven";

export function Count() {
  console.log("Count re-rendered");
  return (
    <>
      <RecoilRoot>
        <CountRenderer />
        <Buttons />
        <IsEven />
      </RecoilRoot>
    </>
  )
}