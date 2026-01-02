import { useState } from "react";

interface Message {
  id: number;
  sender: "user" | "bot" | "typing";
  text: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "bot", text: "¡Hola! ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const sendMessage = () => {
    if (!input.trim() || sending) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    const typingMessage: Message = {
      id: Date.now() + 1,
      sender: "typing",
      text: "",
    };

    setMessages((prev) => [...prev, userMessage, typingMessage]);
    setInput("");
    setSending(true);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "typing"
            ? {
                ...msg,
                sender: "bot",
                text: "Lo siento, estoy agotado ahora mismo, ¿puedo ayudarte en algo más?",
              }
            : msg
        )
      );
      setSending(false);
    }, 4000);
  };

  const resetChat = () => {
    setMessages([
      { id: 1, sender: "bot", text: "¡Hola! ¿En qué puedo ayudarte?" },
    ]);
    setSending(false);
  };

  return (
    <div className="">
      <h3 className="mb-2 font-semibold">ChatBot</h3>

      <div className="h-[300px] overflow-y-auto rounded-md border p-2 text-sm text-gray-600 flex flex-col">
        {messages.map((msg) => (
          <p
            key={msg.id}
            className={`mt-2 ${
              msg.sender === "user" ? "text-right font-medium" : ""
            }`}
          >
            <strong>
              {msg.sender === "user"
                ? "Usuario"
                : msg.sender === "bot"
                ? "ChatBot"
                : "ChatBot pensando"}
              :
            </strong>{" "}
            {msg.text}
            {msg.sender === "typing" && (
              <span className="animate-pulse">mmm...</span>
            )}
          </p>
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escríbeme aquí"
          className="p-3 w-full h-16 resize-none border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        ></textarea>
        <div className="flex gap-2">
          <button
            onClick={sendMessage}
            disabled={sending}
            className={`rounded-md px-4 py-2 text-white flex-1 hover:cursor-pointer ${
              sending ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
            }`}
          >
            {sending ? "Enviando..." : "Enviar"}
          </button>
          <button
            onClick={resetChat}
            className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-500 flex-1 hover:cursor-pointer"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
