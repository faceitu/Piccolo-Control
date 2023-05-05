import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Rutas from "./Routes/Rutas";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Rutas />
      </Layout>
    </>
  );
}
export default App;
