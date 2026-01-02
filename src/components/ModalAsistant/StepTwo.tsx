import { useState } from "react";
import type { Assistant } from "./Models/type";

type Props = {
  form: Assistant;
  setForm: React.Dispatch<React.SetStateAction<Assistant>>;
  onBack: () => void;
  onSave: () => void;
};

const StepTwo = ({ form, setForm, onBack, onSave }: Props) => {
  const [error, setError] = useState<string>("");

  const total =
    form.responseLength.short +
    form.responseLength.medium +
    form.responseLength.long;

  const handleSave = () => {
    if (total !== 100) {
      setError("La suma de porcentajes debe ser 100%");
      return;
    }

    setError("");
    onSave();
  };

  const updateValue = (key: "short" | "medium" | "long", value: number) => {
    setForm({
      ...form,
      responseLength: {
        ...form.responseLength,
        [key]: value,
      },
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Paso 2</h3>

      {(["short", "medium", "long"] as const).map((key) => (
        <div key={key}>
          <label className="block text-sm font-medium capitalize">{key}</label>
          <input
            type="number"
            className="w-full rounded-md border p-2"
            value={form.responseLength[key]}
            onChange={(e) => updateValue(key, Number(e.target.value))}
          />
        </div>
      ))}

      <p
        className={`text-sm ${
          total === 100 ? "text-green-600" : "text-gray-500"
        }`}
      >
        Total: {total}%
      </p>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-blue-600 px-4 py-2 text-white rounded-md  hover:bg-blue-500 hover:cursor-pointer"
        >
          Atrás
        </button>

        <button
          onClick={handleSave}
          className="bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-500 hover:cursor-pointer"
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
