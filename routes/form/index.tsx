import { Handlers } from "$fresh/server.ts";
import SubscribeForm from "../../islands/SubscribeForm.tsx";

type Props = {
  email?: string;
  error?: string;
};

export const handler: Handlers<Props> = {
  async GET(req, ctx) {
    return await ctx.render({});
  },
  async POST(req, ctx) {
    const form = await req.formData();
    console.log({ form });
    const email = form.get("email")?.toString();
    if (!email) {
      return await ctx.render({ error: "No email provided." });
    }
    console.log({ email });

    const headers = new Headers();
    headers.set("location", "?thanks-for-subscribing");
    return new Response(null, { status: 303, headers });
  },
};

export default function Subscribe(props: Props) {
  return <SubscribeForm {...props} />;
}
