import { useState } from "react";
import type { Assistant } from "./Models/type";

type Props = {
  form: Assistant;
  setForm: React.Dispatch<React.SetStateAction<Assistant>>;
  onNext: () => void;
};

const StepOne = ({ form, setForm, onNext }: Props) => {
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (form.name.length < 3 || !form.language || !form.tone) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError(null);
    onNext();
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Paso 1</h3>

      <div>
        <label className="block text-sm text-gray-600">Nombre</label>
        <input
          className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Lenguaje</label>
          <div className="flex gap-2">
            {["Español", "Ingles", "Português"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setForm({ ...form, language: lang })}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  form.language === lang
                    ? "bg-blue-400 text-white border-blue-100 shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Tono</label>
        <div className="flex gap-2 flex-wrap">
          {["Formal", "Casual", "Profesional", "Amigable"].map((tone) => {
            const isSelected = form.tone === tone;
            return (
              <button
                key={tone}
                type="button"
                onClick={() => setForm({ ...form, tone })}
                className={`
            px-4 py-2 rounded-md border font-medium transition-all
            ${
              isSelected
                ? "bg-blue-400 text-white border-blue-300 shadow"
                : "bg-white text-gray-900 border-blue-300  hover:bg-gray-100"
            }
          `}
              >
                {tone}
              </button>
            );
          })}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        onClick={handleNext}
        className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-500 hover:cursor-pointer"
      >
        Siguiente
      </button>
    </div>
  );
};

export default StepOne;
