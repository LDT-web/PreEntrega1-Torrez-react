import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemListContainer/ItemsListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemsListContainer greeting={"Bienvenido a Wilgray"} />
        {/* <ItemCount
          initial={1}
          stock={15}
          onAdd={(quantity) => console.log("cantidad agregada", quantity)}
        /> */}
      </div>
    </>
  );
}

export default App;
