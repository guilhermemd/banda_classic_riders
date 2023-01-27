import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Agenda from "./pages/Agenda";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Fotos from "./pages/Fotos";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Main />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Fotos" element={<Fotos />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
