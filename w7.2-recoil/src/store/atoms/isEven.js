import { selector } from "recoil";
import { countAtom } from "./count";

export const evenSelector = selector({
    key: 'evenSelector',
    get: ({ get }) => {
        const counter = get(countAtom);
        return counter % 2 === 0 ? 'Even Number' : "-";
    },
});