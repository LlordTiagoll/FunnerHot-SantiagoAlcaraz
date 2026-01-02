import { useNavigate } from "react-router";

const Header = () => {
  const navigator = useNavigate();
  return (
    <header className="w-full h-16 p-4 text-white mainColor flex items-center">
      <button
        className="text-lg font-semibold hover:cursor-pointer"
        onClick={() => navigator("/")}
      >
        FunnelHot
      </button>
    </header>
  );
};

export default Header;
