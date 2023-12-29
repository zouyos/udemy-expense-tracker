import "./global.css";
import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
//Quand on déclare seulement un dossier, ça va chercher directement l'index
//NB: Grâce à jsconfig.json, plus besoin d'indiquer le chemin relatif, ça va chercher depuis src

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
