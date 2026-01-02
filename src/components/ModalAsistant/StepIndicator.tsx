const StepIndicator = ({ step }) => {
  return (
    <div className="mb-6 flex justify-center gap-2">
      {[1, 2].map((num) => (
        <div
          key={num}
          className={`h-2 w-8 rounded-full ${
            step >= num ? "bg-blue-600" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
