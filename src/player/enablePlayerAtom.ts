import { atom, useAtomValue, useSetAtom } from "jotai";

export const enablePlayerAtom = atom(false);

export const useEnablePlayerAtomValue = () => useAtomValue(enablePlayerAtom);
export const useSetEnablePlayerAtom = () => useSetAtom(enablePlayerAtom);
