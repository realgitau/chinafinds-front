"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Chat = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex bg-gray-100 h-screen flex-col rounded-xl shadow-xl m-4">
      {/* Chat Area */}
      <div className="flex-1 space-y-4 overflow-y-auto p-6 rounded-xl shadow-xl">
        {/* System Message */}
        <div className="flex items-start">
          <div className="max-w-lg rounded-2xl bg-gray-200 px-5 py-3 shadow-md">
            <p className="text-gray-800 text-sm">
              Hello! Welcome to China Finds. How can I assist you today?
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-lg rounded-2xl bg-[#ff7500] px-5 py-3 text-white shadow-md">
            <p className="text-sm">I want to know about shipping options.</p>
          </div>
        </div>

        {/* Add more messages as needed */}
      </div>

      {/* Input Section */}
      <div className="mt-4 bg-white p-4 shadow-xl rounded-xl">
        <div className="flex items-center gap-4">
          <textarea
            rows={2}
            placeholder="Type your message..."
            className="flex-1 resize-none rounded-full border border-gray-300 p-3 text-gray-700 shadow-sm focus:border-[#ff7500] focus:ring focus:ring-[#ff7500] focus:ring-opacity-50 transition"
          ></textarea>
          <button className="rounded-full bg-[#ff7500] px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-[#e86800] focus:outline-none focus:ring-2 focus:ring-[#ff7500] focus:ring-offset-2 transition">
            Send
          </button>
          <button
            onClick={handleBack}
            className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-[#ff7500] focus:ring-offset-2 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
