import { useRollerAtomValue } from "../spinner/rollerAtom.ts";
import { useTicketsAtomValue } from "../ticketsAtom.ts";
import { useMemo } from "react";

export const Panel = () => {
  const tickets = useTicketsAtomValue();
  const currentRoll = useRollerAtomValue();
  const player = useMemo(
    () => tickets.find((t) => t.ref === currentRoll),
    [tickets, currentRoll],
  );

  return (
    <div className={"absolute top-4 left-0 right-0 px-4 text-center"}>
      <b>{player?.name}</b> - <i>{player?.type}</i>
    </div>
  );
};
