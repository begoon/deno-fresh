import { useComputed, useSignal, useSignalEffect } from "@preact/signals";

type Data = {
  email?: string;
  error?: string;
};

export default function SubscribeForm(props: Data) {
  const email = useSignal(props.email || "");
  const disabled = useComputed(() => !email.value);
  const submit = useComputed(() =>
    "bg-blue-500 text-white font-bold py-2 px-4 " +
    (disabled.value
      ? "rounded opacity-50 cursor-not-allowed"
      : "rounded border border-blue-700 hover:bg-blue-700")
  );
  const check = useComputed(() =>
    disabled.value ? "" : "after:content-['✓'] after:text-green-600 after:pl-1"
  );

  useSignalEffect(() => {
    console.log("email changed to", `[${email.value}]`, disabled.value);
  });

  return (
    <>
      {props.error && <p class="text-red-500">{props.error}</p>}
      <form method="post">
        <div class="grid grid-cols-[1fr_4fr] gap-2">
          <b class={check}>Email</b>
          <input
            name="email"
            value={props.email}
            placeholder="email..."
            onKeyUp={(e: KeyboardEvent) => {
              email.value = (e?.target as HTMLInputElement).value;
            }}
          />
        </div>
        <button disabled={disabled.value} type="submit" class={submit}>
          Subscribe
        </button>
      </form>
    </>
  );
}
