import { ChangeEventHandler } from "react";

export type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeHolder?: string;
};

export default function Input(props: InputProps) {
  return (
    <input
      placeholder={props.placeHolder || ""}
      type="text"
      value={props.value}
      onChange={props.onChange}
      className={"border border-white/10 bg-blue-950 p-2 " + props.className}
    />
  );
}
