import { ActionButton } from "../AuxiliarComponents/ActionButton";
import type { Assistant } from "../ModalAsistant/Models/type";

type AssistantRowProps = {
  assistant: Assistant;
  onEdit: (a: Assistant) => void;
  onDelete: (a: Assistant) => void;
  onTrain: (a: Assistant) => void;
};

export const AssistantRow = ({
  assistant,
  onEdit,
  onDelete,
  onTrain,
}: AssistantRowProps) => (
  <div className="rounded-xl border border-gray-200 p-4 bg-white hover:bg-gray-50 md:grid md:grid-cols-4 md:items-center md:gap-3 md:rounded-none md:border-0 md:border-t">
    <div>
      <span className="block text-xs font-semibold text-gray-500 md:hidden">
        Nombre
      </span>
      <p className="text-gray-700">{assistant.name}</p>
    </div>
    <div>
      <span className="block text-xs font-semibold text-gray-500 md:hidden">
        Lenguaje
      </span>
      <p className="text-gray-700">{assistant.language}</p>
    </div>
    <div>
      <span className="block text-xs font-semibold text-gray-500 md:hidden">
        Tono
      </span>
      <p className="text-gray-700">{assistant.tone}</p>
    </div>
    <div className="mt-3 flex gap-2 md:mt-0 md:justify-end">
      <ActionButton color="purple" onClick={() => onTrain(assistant)}>
        Entrenar
      </ActionButton>
      <ActionButton color="blue" onClick={() => onEdit(assistant)}>
        Editar
      </ActionButton>
      <ActionButton color="red" onClick={() => onDelete(assistant)}>
        Eliminar
      </ActionButton>
    </div>
  </div>
);
