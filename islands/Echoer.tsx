import { effect, Signal, useComputed, useSignal, useSignalEffect } from "@preact/signals";

type GreeterProps = {
  name: Signal<string>;
};

const COLORS = [
  "bg-cyan-500",
  `bg-red-500`,
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-purple-500",
];

export default function Echoer({ name }: GreeterProps) {
  const pressed = useSignal(0);
  const color = useComputed(() => COLORS[pressed.value % COLORS.length]);
  effect(() => {
    console.log({ name: name.peek() });
  });
  useSignalEffect(() => {
    console.log("internal", { pressed: pressed.value });
  });

  return (
    <div class="grid grid-cols-2 gap-4">
      <h1 class={color}>VALUE{name.value}</h1>
      <input
        class="border rounded border-slate-700 p-1"
        value={name.value}
        onKeyUp={(e: KeyboardEvent) => {
          name.value = (e?.target as HTMLInputElement).value;
          pressed.value += 1;
        }}
      />
    </div>
  );
}
