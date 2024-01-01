import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Joke from "../islands/Joke.tsx";

export default function Home() {
  const count = useSignal(300);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md h-screen mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <Counter count={count} />
      </div>
      <div class="fixed top-0 right-0">
        <Joke />
      </div>
      <div class="fixed bottom-0 left-0 gap-2">
        <div class="flex gap-2">
          <a href="/greet/World">Greeting</a>
          <a href="/form">Form</a>
        </div>
      </div>
    </div>
  );
}
