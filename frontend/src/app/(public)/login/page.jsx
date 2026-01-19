"use client";

import { AuthContext } from "@/app/Context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const authInfo = useContext(AuthContext);

  if (!authInfo) {
    throw new Error("AuthContext missing. Wrap app with AuthProvider.");
  }

  const { handleLogIn } = authInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    router.push("/");

    try {
      await handleLogIn(email, password);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-neutral-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-xl rounded-xl p-8 border">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Welcome Back
        </h1>

        {error && (
          <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          <button className="w-full py-2 rounded-lg bg-indigo-600 text-white">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-indigo-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
