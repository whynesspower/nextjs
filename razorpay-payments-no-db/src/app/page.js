"use client";

import { useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpay();
  }, []);

  const buyProduct = async () => {
    try {
      const response = await axios.post("/api/createOrder", { amount: 1 });

      const { orderId, amount } = response.data;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount, // Amount in paise
        currency: "INR",
        name: "Demo Site",
        description: "Test Transaction",
        order_id: orderId,
        handler: function (response) {
          alert('Payment Successful!');
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9876543210",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      alert("Failed to initiate payment");
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image src="/razorpay.png" width={200} height={10} alt="logo" />
      <button onClick={buyProduct} className="p-3 bg-blue-800 text-white border border-white">
        Buy product #1 for 1 INR
      </button>
    </main>
  );
}
