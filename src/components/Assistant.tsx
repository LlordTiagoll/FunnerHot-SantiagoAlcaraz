import { useEffect, useState } from "react";
import CreateAssistant from "./ModalAsistant/CreateAssistant";
import Modal from "./ModalAsistant/Modal";
import type { Assistant } from "./ModalAsistant/Models/type";
import { useNavigate } from "react-router";
import { AssistantHeader } from "./AsistantComponents/AsistantHeader";
import { AssistantRow } from "./AsistantComponents/AssistantRow";
import { DeleteAssistantModal } from "./ModalAsistant/DeleteAssistantModal";

type ModalMode = "create" | "edit" | "delete" | null;

const AssistantPage = () => {
  const navigate = useNavigate();
  const [assistants, setAssistants] = useState<Assistant[]>(() => {
    const stored = localStorage.getItem("assistants");
    return stored ? JSON.parse(stored) : [];
  });

  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [selectedAssistant, setSelectedAssistant] = useState<Assistant | null>(
    null
  );

  useEffect(() => {
    localStorage.setItem("assistants", JSON.stringify(assistants));
  }, [assistants]);

  const closeModal = () => {
    setModalMode(null);
    setSelectedAssistant(null);
  };

  const handleCreate = (data: Omit<Assistant, "id">) => {
    setAssistants((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);
    closeModal();
  };

  const handleEdit = (data: Assistant) => {
    setAssistants((prev) => prev.map((a) => (a.id === data.id ? data : a)));
    closeModal();
  };

  const handleDelete = () => {
    if (!selectedAssistant) return;
    setAssistants((prev) => prev.filter((a) => a.id !== selectedAssistant.id));
    closeModal();
    alert("El asistente ha sido eliminado");
  };

  return (
    <>
      <div className="p-4">
        <div className="mx-auto max-w-[1050px] rounded-xl bg-white p-4 shadow-md">
          <AssistantHeader onCreate={() => setModalMode("create")} />

          <div className="hidden lg:grid md:grid grid-cols-4 gap-3 text-black pb-2">
            <span>Nombre</span>
            <span>Lenguaje</span>
            <span>Tono</span>
            <span className="text-right">Acciones</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:block">
            {assistants.length === 0 ? (
              <p className="p-4 text-center text-gray-500">
                No hay asistentes, por favor cree uno nuevo
              </p>
            ) : (
              assistants.map((assistant) => (
                <AssistantRow
                  key={assistant.id}
                  assistant={assistant}
                  onEdit={(a) => {
                    setSelectedAssistant(a);
                    setModalMode("edit");
                  }}
                  onDelete={(a) => {
                    setSelectedAssistant(a);
                    setModalMode("delete");
                  }}
                  onTrain={(a) => navigate(`/${a.id}`)}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {modalMode && (
        <Modal isOpen onClose={closeModal}>
          {modalMode === "create" && (
            <CreateAssistant onSubmit={handleCreate} onClose={closeModal} />
          )}

          {modalMode === "edit" && selectedAssistant && (
            <CreateAssistant
              assistant={selectedAssistant}
              onSubmit={handleEdit}
              onClose={closeModal}
            />
          )}

          {modalMode === "delete" && selectedAssistant && (
            <DeleteAssistantModal
              assistant={selectedAssistant}
              onClose={closeModal}
              onDelete={handleDelete}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default AssistantPage;
