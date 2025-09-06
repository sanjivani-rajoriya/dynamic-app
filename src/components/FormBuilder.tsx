"use client";

import { useState } from "react";

type FormBuilderProps = {
  onSubmit: (data: { name: string; age: number }) => void;
};

export default function FormBuilder({ onSubmit }: FormBuilderProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || Number(age) <= 0) {
      alert("Please enter a valid name and age greater than 0.");
      return;
    }
    onSubmit({ name, age: Number(age) });
    setName("");
    setAge("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-6"
    >
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
        Fill the Form
      </h3>

      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      {/* Age Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Age
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Enter your age"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
