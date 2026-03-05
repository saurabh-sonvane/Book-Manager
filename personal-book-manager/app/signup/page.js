"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });

    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 text-black">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Create Account
        </h2>

        <input
          placeholder="Name"
          className="border p-3 w-full mb-4 rounded text-black"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded text-black"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-6 rounded"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Sign Up
        </button>

      </div>
    </div>
  );
}