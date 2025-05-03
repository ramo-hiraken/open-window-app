"use client";

import React from "react";

export default function OpenButtonPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() =>
          window.open(
            "https://example.com",
            "_blank",
            "width=800,height=600,noopener,noreferrer"
          )
        }
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        別ウィンドウで開く
      </button>
    </div>
  );
}
