import { httpRouter } from "convex/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { api } from "./_generated/api";
import { httpAction } from "./_generated/server";

// Prod: https://exuberant-bloodhound-73.convex.site/clerk-webhook
// Dev: https://colorless-firefly-368.convex.site/clerk-webhook

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  // In your http.ts, update the handler with better error handling
handler: httpAction(async (ctx, request) => {
  console.log("🔔 WEBHOOK RECEIVED", new Date().toISOString());
  
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("❌ Missing CLERK_WEBHOOK_SECRET environment variable");
      throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable");
    }

    const svix_id = request.headers.get("svix-id");
    const svix_signature = request.headers.get("svix-signature");
    const svix_timestamp = request.headers.get("svix-timestamp");

    console.log("📝 Headers:", { svix_id, svix_signature, svix_timestamp });

    if (!svix_id || !svix_signature || !svix_timestamp) {
      console.error("❌ Missing required headers");
      return new Response("No svix headers found", {
        status: 400,
      });
    }

    let payload;
    try {
      payload = await request.json();
      console.log("📦 Payload type:", payload.type);
    } catch (error) {
      console.error("❌ Error parsing payload:", error);
      return new Response("Invalid payload", { status: 400 });
    }
    
    const body = JSON.stringify(payload);

    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
      
      console.log("✅ Webhook verified successfully");
    } catch (err) {
      console.error("❌ Error verifying webhook:", err);
      return new Response("Error occurred", { status: 400 });
    }

    const eventType = evt.type;
    console.log("🔤 Event type:", eventType);

    if (eventType === "user.created") {
      try {
        const { id, first_name, last_name, image_url, email_addresses } = evt.data;
        console.log("📧 Email addresses:", JSON.stringify(email_addresses));
        
        const email = email_addresses && email_addresses.length > 0 ? 
          email_addresses[0].email_address : "no-email@example.com";
        
        const name = `${first_name || ""} ${last_name || ""}`.trim() || "Anonymous";
        
        console.log("👤 Processing user:", { id, email, name });

        await ctx.runMutation(api.users.syncUser, {
          clerkId: id,
          email,
          name,
          image: image_url || "",
        });
        
        console.log("✅ User created successfully in database");
        return new Response("User created", { status: 200 });
      } catch (error) {
        console.error("❌ Error creating user:", error);
        return new Response("Error creating user", { status: 500 });
      }
    }

    console.log("✓ Webhook processed successfully");
    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error("❌ Unhandled error in webhook:", error);
    return new Response("Server error", { status: 500 });
  }
}),
});

export default http;
