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


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/" element={<Alojamiento/>}/>
          <Route path="/" element={<Aventura/>}/>
          <Route path="/" element={<Bodegas/>}/>
          <Route path="/" element={<Instructores/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
