import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemListContainer/ItemsListContainer";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemsListContainer greeting={"Bienvenido a Wilgray"} />
      </div>
    </>
  );
}

export default App;
