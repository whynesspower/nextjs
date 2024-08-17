import { razorpayInstance } from "@/utils/razorpay";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { amount } = await req.json(); // Amount should be in paise (1 INR = 100 paise)

    if (!amount) {
      return new Response(
        JSON.stringify({ message: "Amount is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: "receipt_order_" + Math.random().toString(36).substring(7),
    };

    const order = await razorpayInstance.orders.create(options);

    return new Response(
      JSON.stringify({ orderId: order.id, amount: order.amount }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
