import { ActionButton } from "../AuxiliarComponents/ActionButton";

type AssistantHeaderProps = {
  onCreate: () => void;
};

export const AssistantHeader = ({ onCreate }: AssistantHeaderProps) => (
  <div className="mb-4 flex justify-between items-center">
    <h2 className="text-lg font-semibold">Asistentes IA</h2>
    <ActionButton color="green" onClick={onCreate}>
      Crear asistente
    </ActionButton>
  </div>
);
