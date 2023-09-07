import type { Signal } from "@preact/signals";

interface MessageProps {
  count: Signal<number>;
}

export default function Message(props: MessageProps) {
  return (
    <div class="flex gap-8 py-6 outline">
      <input value={Number(props.count)*2} />
    </div>
  );
}
