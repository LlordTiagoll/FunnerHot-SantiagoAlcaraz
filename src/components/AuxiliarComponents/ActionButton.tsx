type ActionButtonProps = {
  onClick: () => void;
  color: "green" | "blue" | "red" | "purple" | "gray";
  children: React.ReactNode;
};

const colors = {
  green: "bg-green-600 hover:bg-green-500",
  blue: "bg-blue-600 hover:bg-blue-500",
  red: "bg-red-600 hover:bg-red-500",
  purple: "bg-purple-600 hover:bg-purple-500",
  gray: "bg-gray-500 hover:bg-gray-400",
};

export const ActionButton = ({
  onClick,
  color,
  children,
}: ActionButtonProps) => (
  <button
    onClick={onClick}
    className={`${colors[color]} px-4 py-2 text-white rounded-md hover:cursor-pointer`}
  >
    {children}
  </button>
);
