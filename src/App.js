import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import firebaseConfig from "./config/firebaseConfig"; //import your own firebase Config here.

const App = () => {
  const [user, setUser] = useState(null);
  const { Provider } = UserContext;

  initializeApp(firebaseConfig);

  return (
    <Router>
      <ToastContainer />
      <Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  );
};

export default App;
