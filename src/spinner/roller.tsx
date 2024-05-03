import { Transition } from "./transition.tsx";
import { useRollerAtomValue } from "./rollerAtom.ts";

export const Roller = () => {
  const currentRoll = useRollerAtomValue();

  return (
    <div className="grid grid-cols-6 gap-4 justify-center">
      <Transition>{currentRoll[0]}</Transition>
      <Transition>{currentRoll[1]}</Transition>
      <Transition>{currentRoll[2]}</Transition>
      <Transition>{currentRoll[3]}</Transition>
      <Transition>{currentRoll[4]}</Transition>
      <Transition>{currentRoll[5]}</Transition>
    </div>
  );
};
