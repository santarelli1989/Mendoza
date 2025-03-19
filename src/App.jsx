import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from "./Layout";

import Inicio from "./pages/Inicio";
import Alojamiento from "./pages/Alojamiento";
import Aventura from "./pages/Aventura";
import Bodegas from "./pages/Bodegas";
import Instructores from "./pages/Instructores";
import ViewLugar from "./pages/ViewLugar";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Alojamiento" element={<Alojamiento />} />
          <Route path="/Aventura" element={<Aventura />} />
          <Route path="/Lugar/:id" element={<ViewLugar />} />
          <Route path="/Bodegas" element={<Bodegas />} />
          <Route path="/Instructores" element={<Instructores />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
