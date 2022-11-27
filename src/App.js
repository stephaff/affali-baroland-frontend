import { Routes, Route } from "react-router-dom";
import AskQuestion from "./pages/AskQuestion";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/connexion" element={ <Connexion /> } />
      <Route path="/inscription" element={ <Inscription /> } />
      <Route path="/question" element={ <AskQuestion /> } />
    </Routes>
  );
}

export default App;
