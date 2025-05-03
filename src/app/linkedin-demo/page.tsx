"use client";

import React, { useState } from "react";

const accounts = [
  {
    id: "a",
    name: "山田太郎",
    messages: [
      { from: "user", text: "先日はありがとうございました！", time: "4/30 19:30" },
      { from: "相手", text: "こちらこそ、参考になりました。", time: "4/30 20:15" },
    ],
  },
  {
    id: "b",
    name: "佐藤花子",
    messages: [
      { from: "user", text: "お時間ありますか？", time: "5/1 10:00" },
      { from: "相手", text: "来週なら調整できます！", time: "5/1 11:00" },
    ],
  },
];

export default function OpenButtonPage() {
  const [selectedId, setSelectedId] = useState(accounts[0].id);
  const selectedAccount = accounts.find((acc) => acc.id === selectedId);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        LinkedInアカウント切替
      </label>
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="w-full border p-2 rounded"
      >
        {accounts.map((acc) => (
          <option key={acc.id} value={acc.id}>
            {acc.name}
          </option>
        ))}
      </select>

      <div className="border rounded p-4 bg-white space-y-2">
        {selectedAccount?.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.from === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            <div className="text-sm">{msg.text}</div>
            <div className="text-xs text-gray-500">{msg.time}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="メッセージを入力..."
          className="flex-grow border rounded p-2"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          送信
        </button>
      </div>
    </div>
  );
}
