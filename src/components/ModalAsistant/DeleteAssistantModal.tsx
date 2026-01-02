import { ActionButton } from "../AuxiliarComponents/ActionButton";
import type { Assistant } from "./Models/type";

type DeleteAssistantModalProps = {
  assistant: Assistant;
  onClose: () => void;
  onDelete: () => void;
};

export const DeleteAssistantModal = ({
  assistant,
  onClose,
  onDelete,
}: DeleteAssistantModalProps) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">¿Eliminar asistente?</h3>
    <p className="text-gray-600">
      ¿Seguro que deseas eliminar <strong>{assistant.name}</strong>?
    </p>
    <div className="flex justify-end gap-2">
      <ActionButton color="gray" onClick={onClose}>
        Cancelar
      </ActionButton>
      <ActionButton color="red" onClick={onDelete}>
        Eliminar
      </ActionButton>
    </div>
  </div>
);
