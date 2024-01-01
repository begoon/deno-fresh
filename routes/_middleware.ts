import { FreshContext } from "$fresh/server.ts";
export const handler = [
    async function duration(req: Request, ctx: FreshContext) {
        const start = Date.now();
        const response = await ctx.next();
        const duration = Date.now() - start;
        response.headers.set("Server-Timing", `duration;dur=${duration}`);
        return response;
    },
];
