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
      <h3 className="text-lg font-semibold">Paso 1</h3>

      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          className="w-full rounded-md border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Lenguaje</label>
        <select
          className="w-full rounded-md border p-2"
          value={form.language}
          onChange={(e) => setForm({ ...form, language: e.target.value })}
        >
          <option value="">Selecciona un idioma</option>
          <option value="Español">Español</option>
          <option value="Ingles">Inglés</option>
          <option value="Português">Portugués</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Tono</label>
        <select
          className="w-full rounded-md border p-2"
          value={form.tone}
          onChange={(e) => setForm({ ...form, tone: e.target.value })}
        >
          <option value="">Selecciona un tono</option>
          <option value="Formal">Formal</option>
          <option value="Casual">Casual</option>
          <option value="Profesional">Profesional</option>
          <option value="Amigable">Amigable</option>
        </select>
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
