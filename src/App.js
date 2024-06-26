import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="PetList" Component={PetList} />
        <Route path="PetDetail/:petId" Component={PetDetail} />
      </Routes>
    </div>
  );
}

export default App;
