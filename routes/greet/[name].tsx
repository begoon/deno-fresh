import { Partial } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Echoer from "../../islands/Echoer.tsx";

type Data = {
  ip: string;
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const { ip } = await (await fetch("https://api.ipify.org?format=json")).json();
    console.log(ip);
    const data = {
      ip,
    };
    return ctx.render(data);
  },
};

export default function Greet(props: PageProps<Data>) {
  const name = useSignal(props.params.name);
  const value = useSignal(props.params.name.toUpperCase());
  const now = new Date();
  return (
    <div class="flex flex-col" f-client-nav>
      {now.toLocaleString()}, {props.data.ip}
      <Echoer name={name} />
      <Echoer name={value} />
      <a class="underline" href="/greet/partial-name">Partial NAME</a>
      <a class="underline" href="/greet/partial-value">Partial VALUE</a>
      <form action="/greet/partial-form" method="GET">
        <button class="border rounded border-slate-700  p-1">Partial FORM</button>
      </form>
      <Partial name="name" mode="append">
        <p>{name.value}, when [{(new Date()).toLocaleString()}]</p>
      </Partial>
    </div>
  );
}
