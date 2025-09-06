"use client";

import React, { useState } from "react";
import Toolbar from "../../components/Toolbar";
import FormBuilder from "../../components/FormBuilder";
import FloatingWindow from "../../components/FloatingWindow";

export default function DashboardPage() {
  const [showFloating, setShowFloating] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (data: any) => {
    setSubmittedData(data);
    setShowFloating(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Toolbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <FormBuilder onSubmit={handleSubmit} />
      </main>
      {showFloating && (
        <FloatingWindow
          data={submittedData}
          onClose={() => setShowFloating(false)}
        />
      )}
    </div>
  );
}
