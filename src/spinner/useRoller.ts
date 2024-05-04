import { useState } from "react";
import sample from "lodash/sample";

import { useSetTicketsAtom, useTicketsAtomValue } from "../ticketsAtom.ts";
import { useRollerAtomValue, useSetRollerAtom } from "./rollerAtom.ts";
import { RollerState } from "./constants.ts";
import { useSetEnablePlayerAtom } from "../player/enablePlayerAtom.ts";

export const useRoller = () => {
  const [state, setState] = useState<RollerState>(RollerState.Stopped);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const currentRoller = useRollerAtomValue();
  const tickets = useTicketsAtomValue();

  const setTickets = useSetTicketsAtom();
  const setRoller = useSetRollerAtom();
  const setEnablePlayer = useSetEnablePlayerAtom();

  const random = () => {
    setRoller(sample(tickets)!.ref);
  };

  const play = () => {
    setEnablePlayer(false);
    setState(RollerState.Rolling);
    const id = setInterval(() => {
      random();
    }, 100);

    setIntervalId(id);
  };

  const pause = async () => {
    setEnablePlayer(true);
    setState(RollerState.Stopping);
    if (intervalId) clearInterval(intervalId);

    for await (const timeoutof of [
      100, 101, 102, 104, 110, 120, 150, 215, 315, 400, 420, 550, 600,
    ]) {
      await new Promise((resolve) => setTimeout(resolve, timeoutof));
      random();
    }

    setState(RollerState.Stopped);
    setIntervalId(undefined);
  };

  const remove = () => {
    setEnablePlayer(false);
    setRoller("GDLUCK");
    setTickets((tickets) => tickets.filter((t) => t.ref !== currentRoller));
  };

  return {
    state,
    play,
    pause,
    remove,
  };
};
