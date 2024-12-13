'use client';

import React, { useState } from 'react';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, email }),
    });

    if (response.ok) {
      setStatus('Email sent successfully!');
    } else {
      setStatus('Failed to send email.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Send an Email</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
        >
          Send Email
        </button>
        {status && (
          <p className="mt-4 text-center font-semibold text-green-500">{status}</p>
        )}
      </form>
    </div>
  );
}
