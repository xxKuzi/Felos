import React, { useState } from "react";

const API_KEY =
  "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";
const API_URL = "https://api.openai.com/v1/chat/completions"; // GPT-4 API endpoint

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Ai: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const MaxCharacters = 40;

  // Fetch response from OpenAI API
  const fetchChatGPTResponse = async (userMessage: string) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const aiMessage = data.choices[0].message.content;
        setMessages([
          ...messages,
          { role: "user", content: userMessage },
          { role: "assistant", content: aiMessage },
        ]);
      }
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
    }
    setLoading(false);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      fetchChatGPTResponse(input.trim());
      setInput("");
    }
  };

  return (
    <div className="w-[60vw] p-5">
      <h1 className="text-2xl font-bold text-center mb-4">ChatGPT Interface</h1>
      <div className="border border-gray-300 rounded-lg p-4 h-96 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-lg w-fit max-w-xs ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-300 text-black"
            }`}
          >
            <strong>{msg.role === "user" ? "You" : "ChatGPT"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
        {loading && <p className="italic text-gray-500">Typing...</p>}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          required
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          disabled={input.length > MaxCharacters}
          className={
            "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition " +
            (input.length > MaxCharacters
              ? "bg-gray-300 hover:bg-gray-300"
              : "")
          }
        >
          Send
        </button>
        <p>
          {MaxCharacters > input.length
            ? MaxCharacters - input.length
            : "maximum characters reached"}{" "}
          characters left
        </p>
      </form>
    </div>
  );
};

export default Ai;
