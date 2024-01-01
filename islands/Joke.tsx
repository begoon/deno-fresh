import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { TS } from "../slog.ts";

export default function Joke() {
  if (!IS_BROWSER) return <></>;

  const joke = useSignal("*");
  async function update() {
    console.log(...TS(), "island update before", joke.peek());
    joke.value = await (await fetch("api/joke")).text();
    console.log(...TS(), "island update after", joke.peek());
  }
  setTimeout(update, 2000);
  console.log(...TS(), "island render", joke.peek());

  return <div class="border-2 border-yellow-700">{joke.value}</div>;
}
