
import "./App.css";
import React from "react";
// import Example from "./container/Example";
// import IndexPage from "./container/IndexPage.js";
import Error404 from "./container/Error404";
import { Route, Routes } from "react-router-dom";
import HomePag from "./container/HomePag";







function App() {
  return (
    <div className="App">     
      <Routes>
        <Route exact path="/" element={<HomePag/>}></Route>
        <Route path="/Nuestros_servicios" element={<Error404></Error404>}></Route>
        <Route path="/sucursales" element={<Error404></Error404>}></Route>
        <Route path="/preguntas" element={<Error404></Error404>}></Route>
        <Route></Route>
        </Routes>          
    </div>
  );
}

export default App;
