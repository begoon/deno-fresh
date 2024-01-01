import { FreshContext } from "$fresh/server.ts";
export const handler = [
    async function duration(_req: Request, ctx: FreshContext) {
        const start = Date.now();
        const response = await ctx.next();
        const duration = Date.now() - start;
        response.headers.set("Server-Timing", `duration;dur=${duration}`);
        return response;
    },
    async function cors(req: Request, ctx: FreshContext) {
        const origin = req.headers.get("Origin") || "*";
        const resp = await ctx.next();
        const headers = resp.headers;

        headers.set("Access-Control-Allow-Origin", origin);
        headers.set("Access-Control-Allow-Credentials", "true");
        headers.set(
            "Access-Control-Allow-Headers",
            "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With"
        );
        headers.set(
            "Access-Control-Allow-Methods",
            "POST, OPTIONS, GET, PUT, DELETE"
        );

        return resp;
    },
];
