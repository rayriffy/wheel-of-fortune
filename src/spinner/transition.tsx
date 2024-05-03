import { FunctionComponent, PropsWithChildren } from "react";
import TextTransition, { presets } from "react-text-transition";

export const Transition: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <div className={"w-8 text-center"}>
    <TextTransition
      className={"text-4xl font-bold"}
      springConfig={presets.gentle}
    >
      {children}
    </TextTransition>
  </div>
);
