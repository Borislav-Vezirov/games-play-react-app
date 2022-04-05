import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Catalog from "./components/Catalog.js";
import CreateGame from "./components/CreateGame.js";
import EditGame from "./components/EditGame.js";
import Details from "./components/Details.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

function App() {

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/catalog" element={ <Catalog /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/create-game" element={ <CreateGame /> } />
            <Route path="/details/:id" element={ <Details gameid/> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
