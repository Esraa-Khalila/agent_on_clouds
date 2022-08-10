
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Components/Update";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Index from "./Components/Index";
import Navbar from "./Layout/Navbar";
import SingleShop from "./Components/SingleShop";
import Footer from "./Layout/Footer";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/item/:id" element={<Update />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Index />} />
            <Route path="/single-shop/:id" element={<SingleShop />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
