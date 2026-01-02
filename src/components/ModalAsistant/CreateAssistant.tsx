import { useEffect, useState } from "react";
import type { Assistant } from "./Models/type";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepIndicator from "./StepIndicator";

type Props = {
  onClose: () => void;
  onSubmit: (data: Assistant) => void;
  assistant?: Assistant;
};

const CreateAssistant = ({ onClose, onSubmit, assistant }: Props) => {
  const [step, setStep] = useState<number>(1);

  const [form, setForm] = useState<Assistant>({
    name: "",
    language: "",
    tone: "",
    responseLength: {
      short: 0,
      medium: 0,
      long: 0,
    },
    audioEnabled: false,
  });

  useEffect(() => {
    if (assistant) {
      setForm(assistant);
    }
  }, [assistant]);

  return (
    <>
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
        {step === 1 && (
          <StepOne form={form} setForm={setForm} onNext={() => setStep(2)} />
        )}

        {step === 2 && (
          <StepTwo
            form={form}
            setForm={setForm}
            onBack={() => setStep(1)}
            onSave={() => {
              onSubmit(form);
              onClose();
            }}
          />
        )}
      </div>
      <StepIndicator step={step} />
    </>
  );
};

export default CreateAssistant;
