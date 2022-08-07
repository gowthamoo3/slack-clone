import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import "./Firebase/firebase_config";
import { AuthContext } from "./AuthContext/AuthProvider";
import { useContext, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import Home from "./Home/Home";

function App() {
  const [dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log(auth);
      if (authUser) {
        console.log("User set");
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        console.log("User not set");
        navigate("/login");
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
