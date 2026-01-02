import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Assistant } from "../components/ModalAsistant/Models/type";
import ChatBot from "./ChatBot";

const Training = () => {
  const { id } = useParams<{ id: string }>();
  const [assistant, setAssistant] = useState<Assistant | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("assistants");
    if (!stored) return;

    const assistants: Assistant[] = JSON.parse(stored);
    const found = assistants.find((a) => a.id === id);

    if (found) {
      setTimeout(() => {
        setAssistant(found);
        setText(found.trainingText || "");
      }, 0);
    }
  }, [id]);

  const handleSave = () => {
    if (!assistant) return;

    const stored = localStorage.getItem("assistants");
    if (!stored) return;

    const assistants: Assistant[] = JSON.parse(stored);

    const updated = assistants.map((a) =>
      a.id === assistant.id ? { ...a, trainingText: text } : a
    );

    localStorage.setItem("assistants", JSON.stringify(updated));
    alert("Entrenamiento guardado");
  };

  if (!assistant) {
    return <p className="p-4">Asistente no encontrado</p>;
  }

  return (
    <div className="p-4">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl bg-white p-4 shadow-md">
          <h2 className="mb-2 text-lg font-semibold">Datos del asistente</h2>

          <div className="mb-4 text-sm text-gray-600">
            <p>
              <strong>Nombre:</strong> {assistant.name}
            </p>
            <p>
              <strong>Idioma:</strong> {assistant.language}
            </p>
            <p>
              <strong>Tono:</strong> {assistant.tone}
            </p>
          </div>

          <h3 className="mb-2 font-semibold">Entrenamiento del asistente</h3>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
            className="w-full rounded-md border p-3 resize-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            placeholder="Escribe aquí cómo debe comportarse el asistente..."
          />

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSave}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 hover:cursor-pointer"
            >
              Guardar
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-md">
          <ChatBot></ChatBot>
        </div>
      </div>
    </div>
  );
};

export default Training;
