"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Dynamic Form Builder</h1>
      <p className="text-lg mb-8">Create and manage forms dynamically</p>
      <button
        onClick={() => router.push("/dashboard")}
        className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
