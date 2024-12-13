import { stripeInstance } from "@/utils/stripe";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { productId } = await req.json();

    if (!productId)
      return Response.json(
        { message: "productId is required" },
        { status: 400 }
      );

    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: productId, // Stripe price ID
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    return Response.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "An error occurred" }, { status: 500 });
  }
}
