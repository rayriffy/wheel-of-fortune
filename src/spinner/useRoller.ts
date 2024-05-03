import { useState } from "react";
import sample from "lodash/sample";

import { useTicketsAtomValue } from "../ticketsAtom.ts";
import { useSetRollerAtom } from "./rollerAtom.ts";
import { RollerState } from "./constants.ts";
import { useSetEnablePlayerAtom } from "../player/enablePlayerAtom.ts";

export const useRoller = () => {
  const [state, setState] = useState<RollerState>(RollerState.Stopped);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const tickets = useTicketsAtomValue();
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

    for await (const timeoutof of [100, 150, 215, 315, 420, 550, 600]) {
      await new Promise((resolve) => setTimeout(resolve, timeoutof));
      random();
    }

    setState(RollerState.Stopped);
    setIntervalId(undefined);
  };

  const remove = () => {
    setEnablePlayer(false);
    setRoller("GDLUCK");
  };

  return {
    state,
    play,
    pause,
    remove,
  };
};
