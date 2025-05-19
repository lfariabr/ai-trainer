import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const testHttp = httpRouter();

testHttp.route({
  path: "/simple-test",
  method: "GET",
  handler: httpAction(async () => {
    return new Response("Simple test works", { status: 200 });
  }),
});

export default testHttp;
