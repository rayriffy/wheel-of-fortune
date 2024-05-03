import { Roller } from "./spinner/roller.tsx";
import { Setup } from "./setup.tsx";
import { useTicketsAtomValue } from "./ticketsAtom.ts";
import { Controller } from "./spinner/controller.tsx";
import { Panel } from "./player/panel.tsx";
import { useEnablePlayerAtomValue } from "./player/enablePlayerAtom.ts";

export const App = () => {
  const tickets = useTicketsAtomValue();
  const enablePlayer = useEnablePlayerAtomValue();

  if (tickets.length === 0) return <Setup />;

  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      {enablePlayer && <Panel />}
      <Roller />
      <Controller />
    </div>
  );
};
