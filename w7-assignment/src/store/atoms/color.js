// atoms/backgroundColorAtom.js
import { atom } from 'recoil';

export const backgroundColorAtom = atom({
  key: 'backgroundColorAtom', // unique ID
  default: 'orange', // default background color
});
