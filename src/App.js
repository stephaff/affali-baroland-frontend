import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import AskQuestion from "./pages/AskQuestion";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import { login } from "./redux/actions/actions";


function App() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer.user)
   
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    dispatch(login(user))
 },[]);

  return (
    <Routes>
      <Route path="/" element={ user ? <Home /> : <Navigate to="/connexion" /> } />
      <Route path="/connexion" element={ !user ? <Connexion /> : <Navigate to="/" /> } />
      <Route path="/inscription" element={ !user ? <Inscription /> : <Navigate to="/" /> } />
      <Route path="/question" element={ user ? <AskQuestion /> : <Navigate to="/connexion" /> } />
    </Routes>
  );
}

export default App;
