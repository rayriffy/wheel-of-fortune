import { atom, useAtomValue, useSetAtom } from "jotai";
import { Ticket } from "./types.ts";

export const ticketsAtom = atom<Ticket[]>([]);

export const useTicketsAtomValue = () => useAtomValue(ticketsAtom);
export const useSetTicketsAtom = () => useSetAtom(ticketsAtom);
