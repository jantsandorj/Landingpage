import MenuNavbar from "./components/navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/search";
import Benefit from "./components/benefit";
import Product from "./components/product";
import Ourproduct from "./components/Ourproduct";
import Testimol from "./components/testimonals";

function App() {
  const [menudata, setMenudata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/menu")
      .then((res) => setMenudata(res.data.message));
  }, []);
  return (
    <div className="App bg-light">
      <header className="App-header">
        <MenuNavbar menudata={menudata} />
      </header>
      <main>
        <Search />
        <Benefit />
        <Product />
        <Ourproduct />
        <Testimol />
      </main>
    </div>
  );
}

export default App;
