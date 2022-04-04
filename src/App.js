import { useState } from "react";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Catalog from "./components/Catalog.js";
import CreateGame from "./components/CreateGame.js";
// import EditGame from "./components/EditGame.js";
// import Details from "./components/Details.js";
// import Login from "./components/Login.js";
// import Register from "./components/Register.js";

function App() {

  const [page, setPage] = useState('/');

  const routes = {

    '/'            : <Home />,
    '/catalog'     : <Catalog />,
    '/create-game' : <CreateGame />,

  }

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">
      <Header  navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">
        { routes[page] || <h2>Page Not Found</h2> }
      </main>
  </div>
);
}

export default App;
