"use client";

type FloatingWindowProps = {
  data: { name: string; age: number };
  onClose: () => void;
};

export default function FloatingWindow({ data, onClose }: FloatingWindowProps) {
  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white shadow-2xl rounded-2xl p-6 animate-slide-up">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
        Submitted Data
      </h2>
      <div className="space-y-1 text-gray-600">
        <p>
          <span className="font-medium text-gray-800">Name:</span> {data.name}
        </p>
        <p>
          <span className="font-medium text-gray-800">Age:</span> {data.age}
        </p>
      </div>
      <button
        onClick={onClose}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Close
      </button>
    </div>
  );
}
