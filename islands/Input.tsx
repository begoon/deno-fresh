import { Signal, useSignalEffect } from "@preact/signals";

type Props = {
  name: string;
  value: Signal<string>;
};

export default function ReactiveInput(props: Props) {
  useSignalEffect(() => {
    console.log("input email changed to", props.value.value);
  });
  return (
    <input
      name={props.name}
      value={props.value.value}
      onKeyUp={(e: KeyboardEvent) => {
        props.value.value = (e?.target as HTMLInputElement).value;
      }}
    />
  );
}
