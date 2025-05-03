"use client";

import React, { useState } from "react";

const accounts = [
  {
    id: "a",
    name: "山田太郎",
    messages: [
      { from: "user", text: "こんにちは、先日はありがとうございました！", time: "4/30" },
      { from: "相手", text: "こちらこそ感謝しています", time: "5/1" },
    ],
  },
  {
    id: "b",
    name: "佐藤花子",
    messages: [
      { from: "user", text: "お時間ありますか？", time: "5/2" },
      { from: "相手", text: "来週なら大丈夫です", time: "5/2" },
    ],
  },
];

export default function LinkedInSearchPage() {
  const [selectedId, setSelectedId] = useState(accounts[0].id);
  const [searchText, setSearchText] = useState("");

  const selectedAccount = accounts.find((acc) => acc.id === selectedId);

  const filteredMessages = selectedAccount?.messages.filter((msg) =>
    msg.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">アカウント</label>
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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">チャット検索</label>
        <input
          type="text"
          placeholder="キーワードで検索..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="border rounded p-4 bg-white space-y-2">
        {filteredMessages && filteredMessages.length > 0 ? (
          filteredMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded ${
                msg.from === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
              }`}
            >
              <div className="text-sm">{msg.text}</div>
              <div className="text-xs text-gray-500">{msg.time}</div>
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-500">該当するメッセージがありません</div>
        )}
      </div>
    </div>
  );
}
