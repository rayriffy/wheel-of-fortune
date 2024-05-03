import { Icon } from "react-iconify-icon-wrapper";
import { useRoller } from "./useRoller.ts";
import { RollerState } from "./constants.ts";

export const Controller = () => {
  const { play, pause, state, remove } = useRoller();

  return (
    <div className={"pt-16 flex space-x-6"}>
      <button
        disabled={state === RollerState.Stopping}
        onClick={state === RollerState.Stopped ? play : pause}
        className={
          "transition duration-500 w-12 h-12 border-2 border-gray-600 text-gray-800 rounded-xl flex justify-center items-center cursor-pointer disabled:cursor-wait disabled:bg-gray-100"
        }
      >
        <Icon
          width={22}
          icon={
            state === RollerState.Stopped
              ? "gravity-ui:play"
              : "gravity-ui:pause"
          }
        />
      </button>
      <button
        disabled={state !== RollerState.Stopped}
        onClick={remove}
        className={
          "transition duration-500 w-12 h-12 border-2 border-red-600 text-red-800 rounded-xl flex justify-center items-center cursor-pointer disabled:cursor-wait disabled:bg-red-100"
        }
      >
        <Icon width={22} icon={"gravity-ui:trash-bin"} />
      </button>
    </div>
  );
};
