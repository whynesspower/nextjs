"use client";

import axios from "axios";
import Image from 'next/image';

export default function Home() {
  const buyProduct1 = async () => {
    try {
      const response = await axios.post("/api/createCheckoutSession", {
        productId: "price_1PoJe3P0BSohpqFAse66HbRw",
      });

      console.log(response.data);
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error(error);
      alert("Failed to buy product #1");
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image src="/stripe.png" width={200} height={10} alt="logo" />
      <button onClick={buyProduct1} className="p-3 bg-blue-800 text-white border border-white">
        Buy product #1 for 1500 INR
      </button>
    </main>
  );
}
