import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { CheckedText } from "../components/CheckedText.tsx";

type Data = {
  email?: string;
  error?: string;
};

export default function SubscribeForm(props: Data) {
  const email = useSignal(props.email || "");
  const enabled = useComputed(() => !!email.value);

  useSignalEffect(() => {
    console.log("email changed to", `[${email.value}]`, enabled.value);
  });

  return (
    <>
      {props.error && <p class="text-red-500">{props.error}</p>}
      <form method="post">
        <div class="grid grid-cols-[1fr_4fr] gap-2">
          <CheckedText checked={enabled.value}>
            <b>email</b>
          </CheckedText>
          <input
            name="email"
            value={email.value}
            placeholder="..."
            onKeyUp={(e: KeyboardEvent) => {
              email.value = (e?.target as HTMLInputElement).value;
            }}
          />
        </div>
        <Button disabled={!enabled.value} type="submit">
          Subscribe
        </Button>
      </form>
    </>
  );
}
