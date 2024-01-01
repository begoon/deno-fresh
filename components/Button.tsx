import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const klass = "bg-blue-500 text-white font-bold py-2 px-4 " +
    (props.disabled
      ? "rounded opacity-50 cursor-not-allowed"
      : "rounded border border-blue-700 hover:bg-blue-700");
  return <button {...props} disabled={!IS_BROWSER || props.disabled} class={klass} />;
}
