import { JSX } from "preact";

export function CheckedText(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const checked = props.checked ? "after:content-['✓'] after:text-green-600 after:pl-1" : "";
  return <span {...props} class={checked} />;
}
