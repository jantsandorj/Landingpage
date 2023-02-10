import MenuNavbar from "./components/navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [menudata, setMenudata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/menu")
      .then((res) => setMenudata(res.data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <MenuNavbar menudata={menudata} />
      </header>
    </div>
  );
}

export default App;
