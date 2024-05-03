import { atom, useAtomValue, useSetAtom } from "jotai";

export const rollerAtom = atom<string>("GDLUCK");

export const useRollerAtomValue = () => useAtomValue(rollerAtom);
export const useSetRollerAtom = () => useSetAtom(rollerAtom);
