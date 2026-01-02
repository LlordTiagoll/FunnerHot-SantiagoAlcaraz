import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Assistant from "./components/Assistant";
import Header from "./components/Header";
import Training from "./components/Training";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Assistant />} />
          <Route path="/:id" element={<Training />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
